export async function getProjects({
	pageSize = 10,
	page = 1,
	settlementDate, // 'populated' | '2025' | '2026' | '2027'
	minPrice,
	maxPrice,
} = {}) {
	const q = new URLSearchParams()

	// --- Populate & Sorting ---------------------------------------------------
	q.set('populate', '*')
	q.set('sort[0]', 'createdAt:desc')

	// --- Pagination -----------------------------------------------------------
	q.set('pagination[pageSize]', String(pageSize))
	q.set('pagination[page]', String(page))

	// --- Settlement‑date filters ---------------------------------------------
	const today = new Date().toISOString().split('T')[0]
	const y = new Date().getFullYear()

	switch (settlementDate) {
		case 'populated': // дома уже сданы
			q.set('filters[flats][settlementDate][$lte]', today)
			break
		case String(y):
			q.set('filters[flats][settlementDate][$gte]', `${y}-01-01`)
			q.set('filters[flats][settlementDate][$lte]', `${y}-12-31`)
			break
		case String(y + 1):
			q.set('filters[flats][settlementDate][$gte]', `${y + 1}-01-01`)
			q.set('filters[flats][settlementDate][$lte]', `${y + 1}-12-31`)
			break
		case String(y + 2):
			q.set('filters[flats][settlementDate][$gte]', `${y + 2}-01-01`)
			break
		default:
			// не передан или не распознан — фильтр не применяется
			break
	}

	// --- Price range filters --------------------------------------------------
	if (minPrice) q.set('filters[flats][price][$gte]', String(minPrice))
	if (maxPrice) q.set('filters[flats][price][$lte]', String(maxPrice))

	// --- Fetch with timeout ---------------------------------------------------
	const controller = new AbortController()
	const timer = setTimeout(() => controller.abort(), 10_000)

	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_STRAPI_URL
		}/api/projects/available?${q.toString()}`,
		{ cache: 'no-store', signal: controller.signal }
	)

	clearTimeout(timer)

	if (!res.ok) {
		const errText = await res.text()
		throw new Error(errText || 'Не удалось загрузить проекты')
	}

	return res.json()
}
