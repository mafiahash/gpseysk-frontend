export async function getOffices({
	pageSize = 10,
	page = 1,
	minPrice,
	maxPrice,
} = {}) {
	const q = new URLSearchParams()

	// --- Populate & Sorting ---------------------------------------------------
	q.set('populate[card][populate]', '*')

	q.set('sort[0]', 'createdAt:desc')

	// --- Pagination -----------------------------------------------------------
	q.set('pagination[pageSize]', String(pageSize))
	q.set('pagination[page]', String(page))

	// --- Price range filters --------------------------------------------------
	if (minPrice) q.set('filters[flats][price][$gte]', String(minPrice))
	if (maxPrice) q.set('filters[flats][price][$lte]', String(maxPrice))

	// --- Fetch with timeout ---------------------------------------------------
	const controller = new AbortController()
	const timer = setTimeout(() => controller.abort(), 10_000)

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/offices?${q.toString()}`,
		{ cache: 'no-store', signal: controller.signal }
	)

	clearTimeout(timer)

	if (!res.ok) {
		const errText = await res.text()
		throw new Error(errText || 'Не удалось загрузить проекты')
	}

	return res.json()
}
