# Webila Solutions — React + Vite

A dark, modern agency website starter built around the supplied Webila Solutions logos.

## Stack
- React
- Vite
- React Router
- Plain CSS (no UI framework)
- WebP placeholder portfolio artwork

## Run locally

1. Install Node.js (LTS recommended).
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite, normally:
`http://localhost:5173/`

## Production build

```bash
npm run build
npm run preview
```

The production files will be in `dist/`.

## Important notes

- The portfolio images in `public/images/portfolio/` are temporary WebP mockups created for layout/design purposes. Replace them with your real screenshots later using the same filenames.
- Portfolio cards link to the live websites supplied for the project list.
- The contact form is frontend-only in this starter. It shows a success state but does not send email yet.
- `base: './'` is included in `vite.config.js` for easier static deployment.
- The supplied logos are already included in `public/images/logo/`.

## Main pages
- `/` Home
- `/services` Services
- `/portfolio` Portfolio
- `/contact` Contact

## Brand direction

Primary palette:
- Deep Navy: #061827
- Teal: #10B8C2
- Cyan: #35DBE2
- Electric Blue: #5578FF
- Off White: #F4F8FA

The visual system intentionally combines the teal logo and the dark/blue logo into one dark-tech identity.
