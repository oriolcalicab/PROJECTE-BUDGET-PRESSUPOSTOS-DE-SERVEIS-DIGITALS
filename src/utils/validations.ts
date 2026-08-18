export function isValidEmail(email: string): boolean {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
   return /^[0-9]{9}}$/.test(phone.replace(/\s/g, '')) ;
}

export function isValidFullName(fullName: string): boolean {
   return /^[a-zA-Z\s]+$/.test(fullName) && fullName.trim().length > 0;
}

export function isRequiredFieldValid (value: string): boolean {
    return value.trim().length > 0; }

export function isPositiveNumber(value: number): boolean {
    return Number.isFinite(value) && value > 0;
}    