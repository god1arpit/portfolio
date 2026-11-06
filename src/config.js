/**
 * Application Configuration
 * Loads environment variables with safe defaults.
 */
export const CONFIG = {
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '5615d8d2-4464-4e4b-97e3-057bfdf834ae',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'arpitsachdeva9999@gmail.com',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '8572092552',
}
