# AbdulRahman Essam Moussa — Portfolio

Premium responsive portfolio for AbdulRahman Essam Moussa, Digital Brand Manager | Consumer Health.

## Stack
- Next.js 16
- React 19
- Plain CSS
- One application / one repository
- Vercel deployment

## Why no database?
This portfolio is content-driven. It does not need accounts, a database or authentication. The CV is static and the contact section currently uses email/phone links. A backend validation endpoint is included at `/api/contact` so a real contact workflow can be added later without changing the site architecture.

## Run locally
Install Node.js 24+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check
```bash
npm run build
npm start
```

## Deploy
1. Create a GitHub repository.
2. Push this project.
3. Open Vercel.
4. Import the GitHub repository.
5. Keep the detected Next.js settings.
6. Click Deploy.
7. Add your custom domain in Vercel if desired.

## Before launch
- Replace example.com in metadata/sitemap/robots with your real domain.
- Verify contact details.
- Add your LinkedIn URL when ready.
- Test mobile and desktop.
- Test CV download.
- Optionally connect `/api/contact` to an email service.
