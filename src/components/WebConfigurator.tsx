import type { WebConfig } from "../types/service";

interface Props{
    isVisible: boolean;
    webConfig: WebConfig;
    onChangeWebConfig: (config: WebConfig) => void;
}

export function WebConfigurator ({ isVisible, webConfig, onChangeWebConfig }: Props) {
  if (!isVisible) return null; 

  return(
    <main className="space-y-3 border-t pt-4 mt-4">
        <h1 className="text-lg font-semibold mb-2">Web service WebConfiguration</h1>

        <div>
            <label htmlFor="pages" className="block mb-1">
                Number of pages
            </label>
            <input 
            type="number"
            id="pages"
            min={0}
            value={webConfig.pages}
            onChange={(e) => onChangeWebConfig({ ...webConfig, pages: Number(e.target.value)})}
            aria-invalid={webConfig.pages}
            className="border rounded px-3 py-2 w-full"
             />
        </div>

        <div>
            <label htmlFor="lenguages" className="block mb-1">
                Number of languages
            </label>
            <input 
            type="number"
            id="languages"
            min={0}
            value={webConfig.languages}
            onChange={(e) => onChangeWebConfig({ ...webConfig, languages: Number(e.target.value)})}
            aria-invalid={webConfig.languages}
            className="border rounded px-3 py-2 w-full"
             />
        </div>
    </main>
  )
}