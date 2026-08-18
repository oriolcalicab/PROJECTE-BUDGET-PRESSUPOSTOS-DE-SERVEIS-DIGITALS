import type { ClientData } from "../types/client";
import { isValidEmail, isValidPhone } from "../utils/validations";

interface Props {
  clientData: ClientData;
  onChangeClientData: (data: ClientData) => void;
}

export function ClientForm({ clientData, onChangeClientData }: Props) {
  return (
    <main className="space-y-3 border-t pt-4 mt-4">
      <h1 className="text-lg font-semibold mb-2">Your details</h1>

      <div>
        <label htmlFor="fullName" className="block mb-1">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          value={clientData.fullName}
          onChange={(e) =>
            onChangeClientData({ ...clientData, fullName: e.target.value })
          }
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={clientData.email}
          onChange={(e) =>
            onChangeClientData({ ...clientData, email: e.target.value })
          }
          aria-invalid={clientData.email.length > 0 && !isValidEmail(clientData.email)}
          aria-describedby="email-error"
          className="border rounded px-3 py-2 w-full"
        />
        {clientData.email.length > 0 && !isValidEmail(clientData.email) && (
          <p id="email-error" className="text-red-600 text-sm mt-1">
            Enter a valid email address
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          value={clientData.phone}
          onChange={(e) =>
            onChangeClientData({ ...clientData, phone: e.target.value })
          }
          aria-invalid={
            clientData.phone.length > 0 && !isValidPhone(clientData.phone)
          }
          aria-describedby="phone-error"
          className="border rounded px-3 py-2 w-full"
        />
        {clientData.phone.length > 0 && !isValidPhone(clientData.phone) && (
          <p id="phone-error" className="text-red-600 text-sm mt-1">
            Enter a valid phone number (9 digits)
          </p>
        )}
      </div>
    </main>
  );
}
