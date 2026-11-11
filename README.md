# MD Sameer — Personal Portfolio Website

A responsive static portfolio made with HTML, CSS and vanilla JavaScript. No build tools or paid backend are required.

## 1. Open in VS Code

1. Extract `MD-Sameer-Portfolio.zip`.
2. Open VS Code.
3. Select **File → Open Folder** and choose `md-sameer-portfolio`.
4. Open `index.html`.
5. Recommended: install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

You can also double-click `index.html` to preview it in a browser.

## 2. Personalise before publishing

Search the files for these placeholders and replace them:

- `your.email@example.com` — your real email address.
- `https://www.linkedin.com/` — your LinkedIn profile URL.
- `https://github.com/` — your GitHub profile URL.
- `https://www.youtube.com/` — your YouTube channel or specific project video URLs.
- Add your resume as `assets/MD-Sameer-Resume.pdf` (use this exact filename, or update the link in `index.html`).
- Add real project photos, circuit diagrams, simulation screenshots, measured results and certificate scans.
- Review every project description and update it so it accurately reflects what you personally built and tested.

The project detail popups are in `script.js` under `projectData`. Project cards and the video cards are in `index.html`.

## 3. Deploy free on Vercel

1. Create a GitHub account if you do not already have one.
2. Create a new **public or private** GitHub repository, for example `md-sameer-portfolio`.
3. Upload the contents of this folder to the repository (the `index.html` file should be at the repository root).
4. Sign in at https://vercel.com/ using GitHub.
5. Choose **Add New → Project**, import your portfolio repository, and deploy.
6. Framework Preset: **Other**. Build Command: leave blank. Output Directory: `.` (or leave the default if Vercel detects the static site). No environment variables are needed.
7. Vercel will provide a free `*.vercel.app` address.

## 4. Connect a custom domain

You need to purchase a domain from a registrar (for example, a domain provider of your choice). A custom domain is not included free with Vercel.

1. In Vercel, open your project → **Settings → Domains**.
2. Enter the domain you purchased, such as `mdsameer.com`, and add it.
3. Vercel will show the exact DNS records required for your domain and whether to use an A record, CNAME, or other record.
4. Sign in to your domain registrar and open DNS management.
5. Add the records exactly as Vercel displays. Remove conflicting records only when you are sure they are not needed for another service.
6. Return to Vercel and wait for domain verification and HTTPS certificate setup. DNS propagation can take some time.
7. Set your preferred primary domain in Vercel.

Do not copy DNS values from random tutorials: use the values shown in your own Vercel project because they can differ.

## 5. Updating the website later

After deployment, edit files locally in VS Code, then commit and push the changes to GitHub. Vercel automatically creates a new deployment.

## Folder structure

```text
md-sameer-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── (add your resume, photos, diagrams and certificates here)
```

## Important accuracy note

This is a starter portfolio based on the education and project information supplied. It uses illustrative CSS artwork rather than photographs of your actual hardware. Replace placeholders and verify project details, dates, course names and links before sharing with recruiters.


## Personalisation added in this version

### Custom domain: `mdsameer.com`
The website is prepared for the domain name `mdsameer.com`. You must purchase the domain separately, then add it in Vercel → Project → Settings → Domains. Follow the exact DNS records Vercel displays. The domain is not included in the free hosting plan.

### Profile photo
The hero section currently uses `assets/profile-photo-placeholder.svg` because your actual photo has not been attached in this chat. Replace it with your own image named `profile-photo.jpg` in the `assets` folder, then in `index.html` change:
`assets/profile-photo-placeholder.svg`
to:
`assets/profile-photo.jpg`

A clear, front-facing portrait with good lighting works best. JPG or WebP is recommended.

### GitHub links
Each project card now includes a GitHub link. Replace `YOUR-GITHUB-USERNAME` and the example repository names in `index.html` with your actual GitHub username and repository URLs. The social/contact GitHub links also need your username.

### YouTube embeds
Two responsive YouTube embed areas have been added. In `index.html`, replace:
- `REPLACE_WITH_VIDEO_ID_1`
- `REPLACE_WITH_VIDEO_ID_2`

with the video IDs from your YouTube URLs. For example, for `https://www.youtube.com/watch?v=AbCd1234`, the video ID is `AbCd1234`. If you do not have a video yet, remove the iframe or leave the embed for later; the placeholder ID will not play.

### Contact and social details
Replace `YOUR-EMAIL@example.com`, `YOUR-LINKEDIN-USERNAME`, `YOUR-GITHUB-USERNAME`, and `YOUR-YOUTUBE-CHANNEL` with your real details. Update `assets/MD-Sameer-Resume.pdf` with your current resume PDF.

### Before sharing with recruiters
Check all project details against your actual builds. Add real photos, circuit diagrams, HFSS plots, source-code repositories, video demos and certificate verification links. Do not leave placeholder links or sample video IDs on the live website.
