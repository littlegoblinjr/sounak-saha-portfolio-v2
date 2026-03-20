---
description: How to deploy the portfolio website to Vercel
---

There are two primary ways to deploy your Vite + React portfolio to Vercel:

### Method 1: GitHub Integration (Recommended)
This is the best way to keep your site updated automatically whenever you push code.

1.  **Push your code to GitHub**:
    - Create a new repository on GitHub.
    - Initialize git in your `portfolio-v2` folder:
      ```powershell
      git init
      git add .
      git commit -m "Initial commit"
      git remote add origin <your-github-repo-url>
      git push -u origin main
      ```
2.  **Connect to Vercel**:
    - Go to [Vercel.com](https://vercel.com) and log in.
    - Click **"Add New Project"**.
    - Import your GitHub repository.
    - Vercel will automatically detect Vite. Click **"Deploy"**.

### Method 2: Vercel CLI (Quickest)
Use this if you want to deploy directly from your terminal.

1.  **Install Vercel CLI**:
    ```powershell
    npm install -g vercel
    ```
2.  **Deploy**:
    - Run the following command inside the `portfolio-v2` folder:
// turbo
    ```powershell
    vercel
    ```
    - Follow the prompts (Select "Yes" for all defaults).

3.  **Production Deploy**:
    - Once you're ready, run:
// turbo
    ```powershell
    vercel --prod
    ```
