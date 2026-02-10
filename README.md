<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1KbIvywBtC3MsVcy0hd-D8xrf4D-stBx1

## Run Locally

**Prerequisites:** Node.js, [Vercel CLI](https://vercel.com/docs/cli)

1. Install dependencies: `npm install`
2. Create a `.env.local` file with:
	- `GEMINI_API_KEY=your_key`
	- `RESEND_API_KEY=your_resend_api_key`
	- `RESEND_FROM_EMAIL=verified_sender@yourdomain.com`
3. Start the full stack dev environment: `vercel dev`
4. Open `http://localhost:3000`

> `vercel dev` serves both the Vite frontend and the `/api/gemini` serverless function so the AI chat works exactly like production.

## Deploy to Vercel

1. Commit your changes and push to GitHub
2. Run `vercel login` (once per machine)
3. Run `vercel --prod` and follow the prompts
4. In the Vercel dashboard, add `GEMINI_API_KEY`, `RESEND_API_KEY`, and `RESEND_FROM_EMAIL` (project → Settings → Environment Variables → Production/Preview)
5. Trigger a redeploy if you update secrets later

The build uses `npm run build` and outputs to `dist`, as configured in `vercel.json`.
