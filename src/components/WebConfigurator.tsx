import type { WebConfig } from "../types/service";


interface Props {
  isVisible: boolean;
  webConfig: WebConfig;
  onChangeWebConfig: (config: WebConfig) => void;
}

export function WebConfigurator({
  isVisible,
  webConfig,
  onChangeWebConfig,
}: Props) {
  if (!isVisible) return null;

  function updatePages(delta: number) {
    const next = Math.max(1, webConfig.pages + delta);
    onChangeWebConfig({ ...webConfig, pages: next });
  }

  function updateLanguages(delta: number) {
    const next = Math.max(0, webConfig.languages + delta);
    onChangeWebConfig({ ...webConfig, languages: next });
  }

  return (
  <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Nombre de pàgines</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => updatePages(-1)}
            aria-label="Reduir nombre de pàgines"
            className="h-5 w-5 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-[#2F9E6E] hover:text-[#2F9E6E]"
          >
            −
          </button>
          <span className="w-10 text-center rounded border border-gray-200 py-1 text-sm">
            {webConfig.pages}
          </span>
          <button
            type="button"
            onClick={() => updatePages(1)}
            aria-label="Augmentar nombre de pàgines"
            className="h-5 w-5 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-[#2F9E6E] hover:text-[#2F9E6E]"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">Nombre de llenguatges</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => updateLanguages(-1)}
            aria-label="Reduir nombre de llenguatges"
            className="h-5 w-5 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-[#2F9E6E] hover:text-[#2F9E6E]"
          >
            −
          </button>
          <span className="w-10 text-center rounded border border-gray-200 py-1 text-sm">
            {webConfig.languages}
          </span>
          <button
            type="button"
            onClick={() => updateLanguages(1)}
            aria-label="Augmentar nombre de llenguatges"
            className="h-5 w-5 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:border-[#2F9E6E] hover:text-[#2F9E6E]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
