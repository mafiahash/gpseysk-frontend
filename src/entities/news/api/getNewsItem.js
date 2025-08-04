export async function getNewsItem(newsId) {
	const query = new URLSearchParams()

	query.set('populate', '*')

	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_STRAPI_URL
		}/api/news/${newsId}?${query.toString()}`,
		{
			cache: 'force-cache',
			next: {
				tags: ['news-item'],
			},
		}
	)

	if (!res.ok) throw new Error('Failed to fetch news')

	const { data } = await res.json() // Strapi отдаёт { data, meta }
	return data
}
