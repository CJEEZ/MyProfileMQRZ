# File Hosting → Web Hosting Demo

This workspace contains a minimal demo website that shows how files hosted on file-hosting services can be used by a website served from a web host.

Files added:

- [index.html](index.html) — demo page that loads externally-hosted files
- [styles.css](styles.css) — styles for the demo
- [script.js](script.js) — small script to replace URLs at runtime

Quick preview (no install):

1. Open [index.html](index.html) in your browser (double-click or `File → Open`).

How this demo works

- The page displays an image and an embedded PDF using public sample URLs (Cloudinary demo and file-examples.com).
- To use your own files, upload them to a file host and replace the URLs in the page (or edit the text inside the code blocks and click the button).

Uploading to common file hosts

- Cloudinary (images, videos):
  1. Create a free account at https://cloudinary.com/
  2. From the dashboard, upload your image or video.
  3. Use the asset's delivery URL (e.g., `https://res.cloudinary.com/<your-cloud-name>/image/upload/v.../yourfile.jpg`).

- Google Drive (any file):
  1. Upload file to Drive.
  2. Right-click → "Get link" → set to "Anyone with the link".
  3. Convert the share link to a direct-download link: replace `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` with `https://drive.google.com/uc?export=download&id=FILE_ID`.

- Dropbox (any file):
  1. Upload file to Dropbox.
  2. Create a shared link (it will look like `https://www.dropbox.com/s/<id>/file.jpg?dl=0`).
  3. To get a raw file URL, change the query to `dl=1` (e.g., `https://www.dropbox.com/s/<id>/file.jpg?dl=1`).

- Terabox / others: Use the service's public/shared URL and ensure it resolves to a raw file (not an HTML preview).

Deploying the website (options)

- GitHub Pages (static, free):
  1. Create a GitHub repo and push these files.
  2. In repo Settings → Pages, set the source to main branch `/ (root)`.
  3. Your site will be served at `https://<your-username>.github.io/<repo>/`.

  Example commands:

  ```bash
  git init
  git add .
  git commit -m "Add file-hosting demo"
  git branch -M main
  git remote add origin https://github.com/<you>/<repo>.git
  git push -u origin main
  ```

- Vercel / Render / Netlify (fast, drag-and-drop or connect repo): follow each service's deploy flow and point it at the repo.

Security & CORS notes

- Some file hosts may not allow embedding or may set restrictive CORS headers; Cloudinary and raw file URLs (Dropbox `dl=1` or Google Drive `uc?export=download`) usually work for direct use.

Next steps I can help with

- Walk you through creating accounts on a specific provider (I can supply step-by-step screenshots and exact clicks).
- Walk you through uploading a file and generating a public URL for a chosen file host.
- Deploy these files to a web host (I can prepare a GitHub repo creation script and deployment steps).
