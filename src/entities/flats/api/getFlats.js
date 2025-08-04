export async function getFlats({
	pageSize = 10,
	page = 1,
	projectId,
	filters = {},
} = {}) {
	const query = new URLSearchParams()

	query.set('filters[flatStatus][$eq]', 'available')
	query.set('fields[0]', 'floor')
	query.set('fields[1]', 'corpus')
	query.set('fields[2]', 'price')
	query.set('fields[3]', 'oldPrice')
	query.set('fields[4]', 'settlementDate')
	query.set('fields[5]', 'rooms')
	query.set('fields[6]', 'area')
	query.set('populate[flatPlan][fields][0]', 'url')
	query.set('populate[project][fields][0]', 'maxFloors')
	query.set('pagination[pageSize]', pageSize)
	query.set('pagination[page]', page)

	if (projectId) {
		query.set('filters[project][documentId][$eq]', projectId)
	}

	for (const key in filters) {
		query.set(`filters[${key}]`, filters[key])
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/flats?${query.toString()}`
	)

	if (!res.ok) throw new Error('Failed to fetch flats')

	return res.json()
}
