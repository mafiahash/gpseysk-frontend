export async function getOffice({ officeId }) {
	const q = new URLSearchParams()

	// --- Populate & Sorting ---------------------------------------------------
	q.set('populate[seo][populate]', '*')
	q.set('populate[plan][populate]', '*')
	q.set('populate[features][populate]', '*')
	q.set('populate[description][populate]', '*')
	q.set('populate[gallery][populate]', '*')

	// --- Fetch with timeout ---------------------------------------------------
	const controller = new AbortController()
	const timer = setTimeout(() => controller.abort(), 10_000)

	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_STRAPI_URL
		}/api/offices/${officeId}?${q.toString()}`,
		{
			cache: 'force-cache',
			next: {
				tags: ['office'],
			},
		}
	)

	clearTimeout(timer)

	if (!res.ok) {
		const errText = await res.text()
		throw new Error(errText || 'Не удалось загрузить проекты')
	}
	const json = await res.json()
	return json.data
}
