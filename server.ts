import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { handleSubmitPlayer, type SubmitPlayerBody } from './lib/submitPlayer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

async function createApp() {
  const app = express();
  app.use(express.json({ limit: '32kb' }));

  app.post('/api/submit-player', async (req, res) => {
    const result = await handleSubmitPlayer(req.body as SubmitPlayerBody);
    res.status(result.status).json(result.body);
  });

  if (isProd) {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      root: __dirname,
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  return app;
}

createApp()
  .then((app) => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server: http://0.0.0.0:${PORT} (${isProd ? 'production' : 'dev'})`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
