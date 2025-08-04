export async function getGlobalSettings() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global`, {
		cache: 'force-cache',
		next: {
			tags: ['global'],
		},
	})

	if (!res.ok) {
		throw new Error('Failed to fetch site settings')
	}

	const json = await res.json()
	return json.data
}
