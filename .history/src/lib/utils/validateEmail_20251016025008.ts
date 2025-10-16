export const isEmailValid = (email: string) =
// ✅ Utilidad para validar correos electrónicos
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
