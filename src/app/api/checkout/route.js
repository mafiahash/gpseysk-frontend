export async function POST(request) {
	try {
		const { name, surname, phone, paymentType, object, objectType } =
			await request.json()

		const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN
		const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

		const res = await fetch(
			`https://api.telegram.org/bot${TOKEN}/sendMessage`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: `Новая заявка✅
Покупка квартиры
====
Имя: ${name}
Фамилия: ${surname}
Номер телефона: ${phone}
Способ оплаты:${paymentType}
====
[Ссылка на квартиру](${process.env.NEXT_PUBLIC_DOMAIN}/admin/content-manager/collection-types/api::flat.flat/${object})`,
					parse_mode: 'Markdown',
				}),
			}
		)

		if (!res.ok) {
			console.error('Ошибка при отправке в Telegram', await res.text())
			return new Response('Ошибка при отправке в Telegram', { status: 500 })
		}

		return new Response('status: ok', { status: 200 })
	} catch (error) {
		console.error('Ошибка на сервере:', error)
		return new Response('Ошибка сервера', { status: 500 })
	}
}
