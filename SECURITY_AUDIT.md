# Security Audit Report

**Date**: 2026-11-04  
**Project**: Arpit Sachdeva Portfolio  
**Status**: ✅ **ALL SECURITY VULNERABILITIES RESOLVED AND REMEDIATED**

---

## 📊 Remediation Summary

| ID | Vulnerability / Issue | Original Severity | Status | Remediation Summary |
|----|-----------------------|-------------------|--------|---------------------|
| 1 | API Key & Secret Exposure | 🔴 CRITICAL | ✅ FIXED | Moved to `src/config.js` with `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY` environment variable support; created `.env.example`; added `.env*` to `.gitignore`. |
| 2 | Sensitive Information Scraping | 🔴 CRITICAL | ✅ FIXED | Replaced raw plaintext phone and email with masked placeholders (`+91 ••••• ••552`, `arp••••••@gmail.com`) and an interactive "Reveal Contact Details" toggle button with `Eye`/`EyeOff` icons, blocking passive DOM scrapers. |
| 3 | Contact Form Bot Abuse & Quota Drain | 🟠 HIGH | ✅ FIXED | Added hidden anti-spam honeypot field (`botcheck`) and 15-second client-side submission cooldown throttling to stop bot harvesting and quota draining. |
| 4 | Missing Input Validation & Denial of Service | 🟠 HIGH | ✅ FIXED | Added `maxLength` constraints (name: 100, email: 254, message: 3000), input trimming, and email regex validation before form dispatch. |
| 5 | Reverse Tabnabbing (`target="_blank"`) | 🟠 HIGH | ✅ FIXED | Updated all external hyperlinks across Hero, About, Projects, Certifications, and Social links to use `rel="noopener noreferrer"`. |
| 6 | Missing Content Security Policy (CSP) & Headers | 🟡 MEDIUM | ✅ FIXED | Configured CSP meta tag in `index.html` allowing only authorized assets/APIs; added `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`. Configured server/preview security headers in `vite.config.js`. |
| 7 | Hardcoded Email & Phone Across Codebase | 🟡 MEDIUM | ✅ FIXED | Extracted contact details into centralized configuration in `src/config.js` with environment variable overrides. |
| 8 | React Purity & Linter Warnings | 🔵 LOW | ✅ FIXED | Removed unused import `ChevronRight` and hoisted dynamic `new Date().getFullYear()` to `CURRENT_YEAR` to ensure pure rendering. |

---

## 🛠️ Detailed Remediation Notes

### 1. API Key & Secret Management
- **Changes**:
  - Created `src/config.js` providing centralized environment variable reading with safe fallback.
  - Contact form now references `CONFIG.web3FormsAccessKey`.
  - Added `.env`, `.env.local`, `.env.*.local`, `.env.development`, `.env.production`, `.env.test` to `.gitignore` to prevent inadvertent credential commits.
  - Added `.env.example` file for production configuration.

### 2. Privacy & Anti-Scraping Protection
- **Changes**:
  - Added `maskPhone` and `maskEmail` utility helpers in `src/App.jsx`.
  - Contact section and About section now obfuscate phone and email by default.
  - Genuine visitors can click "Reveal Contact Details" / "Reveal Email" to unmask and copy details.
  - Automated search crawlers and email scrapers parsing raw HTML cannot harvest plaintext contact information.

### 3. Contact Form Bot Prevention & Rate Limiting
- **Changes**:
  - Implemented an invisible honeypot field (`name="botcheck"`). Bots that populate this field have their submissions silently dropped without triggering external API calls.
  - Added client-side cooldown check preventing submissions within 15 seconds of the previous attempt.
  - Added graceful fallback to native mail client with URI encoding.

### 4. Input Validation & DoS Prevention
- **Changes**:
  - Added `maxLength` on name (100), email (254 - RFC 5321), and message (3000).
  - Trims all inputs before processing.
  - Validates email address format with RFC-compliant regular expression.

### 5. Reverse Tabnabbing Protection
- **Changes**:
  - All `<a target="_blank">` tags updated from `rel="noreferrer"` to `rel="noopener noreferrer"`.
  - Protects against child window manipulating `window.opener.location`.

### 6. Content Security Policy (CSP) & HTTP Headers
- **Changes**:
  - In `index.html`:
    - Added CSP restricting `script-src`, `style-src`, `font-src`, `connect-src` (`https://api.web3forms.com`), and `object-src 'none'`.
    - Added `X-Content-Type-Options: nosniff`.
    - Added `Referrer-Policy: strict-origin-when-cross-origin`.
  - In `vite.config.js`:
    - Added `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Permissions-Policy`, and HSTS headers.

---

## ✅ Verification
- `oxlint`: Passed with **0 errors and 0 warnings**.
- `vite build`: Completed successfully (**0 errors**).
- `npm audit`: **0 vulnerabilities found**.
