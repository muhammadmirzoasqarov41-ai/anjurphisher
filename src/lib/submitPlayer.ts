export interface PlayerSubmission {
  playerId: string;
  telegramUsername: string;
  gmail: string;
  password: string;
  selectedAmount: string;
  providerName: string;
}

export async function submitPlayerToAdmin(data: PlayerSubmission): Promise<void> {
  const response = await fetch('/api/submit-player', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as { ok?: boolean; error?: string };
  if (!response.ok || !result.ok) {
    throw new Error(result.error ?? 'Ma’lumot yuborilmadi');
  }
}
