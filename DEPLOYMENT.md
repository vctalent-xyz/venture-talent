# Secure Deployment Guide

## Setting Up Web3Forms API Key Securely

### Step 1: Get Your API Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Copy your access key from the dashboard

### Step 2: Local Development Setup

Create a `.env.local` file in the project root:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
```

**Important**: `.env.local` is already in `.gitignore`, so it won't be committed to GitHub.

### Step 3: GitHub Pages Deployment (Secure Method)

#### Option A: Using GitHub Actions Secrets (Recommended)

1. **Add the secret to GitHub:**
   - Go to your repository on GitHub
   - Click **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `WEB3FORMS_ACCESS_KEY`
   - Value: Paste your Web3Forms access key
   - Click **Add secret**

2. **The workflow is already configured!**
   - The `.github/workflows/deploy.yml` file will automatically use this secret during build
   - No code changes needed

3. **Deploy:**
   - Push to `main` branch
   - GitHub Actions will build with the secret injected
   - The form will work on your live site

#### Option B: Manual Build with Environment Variable

If you prefer to build locally and push the `dist` folder:

```bash
# Set the key as an environment variable
export VITE_WEB3FORMS_ACCESS_KEY=your_key_here

# Build
npm run build

# The dist folder will contain the built site with the key embedded
```

**Note**: This method embeds the key in the built JavaScript, which is fine for Web3Forms (their keys are designed for client-side use), but Option A is more secure.

### Step 4: Verify It Works

1. **Local testing:**
   ```bash
   # Make sure .env.local exists with your key
   npm run dev
   # Test the contact form
   ```

2. **Production testing:**
   - After deployment, test the form on your live site
   - Check your email for the submission

## Security Notes

- ✅ `.env.local` is in `.gitignore` - won't be committed
- ✅ GitHub Actions secrets are encrypted and only accessible during workflow runs
- ✅ The key is injected at build time, not stored in source code
- ⚠️ Web3Forms keys are designed for client-side use, but it's still best practice to keep them out of version control

## Troubleshooting

**Form shows error after deployment:**
- Verify the secret is set correctly in GitHub (Settings → Secrets)
- Check the workflow logs to ensure the build succeeded
- Make sure the secret name matches: `WEB3FORMS_ACCESS_KEY`

**Form works locally but not in production:**
- Ensure GitHub Actions secret is set
- Check that the workflow file is in `.github/workflows/deploy.yml`
- Verify the workflow ran successfully (Actions tab in GitHub)
