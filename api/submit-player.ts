import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleSubmitPlayer, type SubmitPlayerBody } from '../lib/submitPlayer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const result = await handleSubmitPlayer((req.body ?? {}) as SubmitPlayerBody);
  return res.status(result.status).json(result.body);
}
