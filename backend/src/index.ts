import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Log incoming requests
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// TikTok OAuth Redirect
app.get('/api/auth/tiktok', (req, res) => {
  const clientId = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.TIKTOK_REDIRECT_URI || 'http://localhost:3000/api/auth/callback');
  const scope = 'user.info.basic,video.list,comment.list';
  const state = Math.random().toString(36).substring(7);

  const authUrl = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
  
  res.redirect(authUrl);
});

// TikTok OAuth Callback
app.get('/api/auth/callback', async (req: Request, res: Response) => {
  const { code, state, error } = req.query;

  if (error) {
    return res.status(400).json({ error });
  }

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const clientId = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

    const response = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_key: clientId!,
        client_secret: clientSecret!,
        code: code as string,
        grant_type: 'authorization_code',
        redirect_uri: process.env.TIKTOK_REDIRECT_URI!,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json(data);
    }

    // Ici on stockerait le token dans une DB
    // Pour l'instant on redirige vers le frontend avec un succès
    res.redirect(`http://localhost:3001/?auth=success&token_type=${data.token_type}`);
  } catch (err) {
    console.error('Callback error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Webhook endpoint
app.post('/api/webhook', (req, res) => {
  const data = req.body;
  const headers = req.headers;

  console.log('--- Nouvelle Requête Webhook ---');
  console.log('Headers:', JSON.stringify(headers, null, 2));
  console.log('Body:', JSON.stringify(data, null, 2));

  res.status(200).json({
    status: 'success',
    received_at: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
