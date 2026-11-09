import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleSubmitPlayer, type SubmitPlayerBody } from '../lib/submitPlayer';

function parseBody(req: VercelRequest): SubmitPlayerBody {
  const raw = req.body;
  if (raw && typeof raw === 'object' && !Buffer.isBuffer(raw)) {
    return raw as SubmitPlayerBody;
  }
  if (typeof raw === 'string' && raw.length > 0) {
    try {
      return JSON.parse(raw) as SubmitPlayerBody;
    } catch {
      return {};
    }
  }
  return {};
}

async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    const result = await handleSubmitPlayer(parseBody(req));
    return res.status(result.status).json(result.body);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Noma’lum xato';
    console.error('[submit-player]', err);
    return res.status(500).json({ ok: false, error: message });
  }
}

export default handler;
