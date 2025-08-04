export async function getNews({ limit = 10, start = 0, filters = {} }) {
	const query = new URLSearchParams()

	query.set('fields[0]', 'title')
	query.set('fields[1]', 'shortDescription')
	query.set('fields[2]', 'createdAt')
	query.set('sort[0]', 'createdAt:desc')
	query.set('pagination[limit]', limit)
	query.set('pagination[start]', start)

	// --- детальная фильтрация по объекту, дому или офису ---
	const { project, house, office, type } = filters

	if (project) {
		// news?filters[project][documentId][$eq]=<uuid>
		query.set('filters[projects][documentId][$eq]', project)
	}
	if (house) {
		// news?filters[house][documentId][$eq]=<uuid>
		query.set('filters[house][documentId][$eq]', house)
	}
	if (office) {
		// news?filters[office][documentId][$eq]=<uuid>
		query.set('filters[office][documentId][$eq]', office)
	}
	switch (type) {
		case 'projects':
			query.set('filters[projects][documentId][$notNull]', true)
			break
		case 'house':
			query.set('filters[house][documentId][$notNull]', true)
			break
		case 'office':
			query.set('filters[office][documentId][$notNull]', true)
			break
		default:
			console.log('Нет привязки')
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news?${query.toString()}`,
		{ cache: 'no-store' } // чтобы не кэшировалось на клиенте
	)

	if (!res.ok) throw new Error('Failed to fetch news')

	return res.json()
}
