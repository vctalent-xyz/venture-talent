# VentureTalent.io Website

A recruiting website for early stage companies and ML teams, built with React, Vite, and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Setup Contact Form

The contact form uses Web3Forms (free service). See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed secure setup instructions.

**Quick setup:**
1. Get a free API key from [https://web3forms.com](https://web3forms.com)
2. For local dev: Create `.env.local` with `VITE_WEB3FORMS_ACCESS_KEY=your_key`
3. For production: Add `WEB3FORMS_ACCESS_KEY` as a GitHub Actions secret (see DEPLOYMENT.md)

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Wouter** - Client-side routing
- **Radix UI** - Component primitives
- **Lucide React** - Icons

## Project Structure

```
venturetalent-local/
├── src/
│   ├── components/     # React components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components (shadcn/ui)
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utilities and helpers
├── public/             # Static assets
└── index.html          # HTML entry point
```

## Development

This is a client-side only application. No backend server is required - it runs entirely in the browser using Vite's dev server.

## Deployment to GitHub Pages

### Prerequisites
- GitHub repository set up
- GitHub Pages enabled in repository settings

### Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Configure GitHub Pages:**
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)` or `/dist` depending on your setup
   - Save

4. **If deploying from `/dist` folder:**
   - You may need to add a GitHub Actions workflow to build and deploy automatically
   - Or manually push the `dist` folder contents to a `gh-pages` branch

### Custom Domain (Optional)

If you're using a custom domain (venturetalent.io):
- Add a `CNAME` file in the `public` folder with your domain
- Configure DNS settings as per GitHub Pages documentation

## Security

See [SECURITY.md](./SECURITY.md) for security audit details.
