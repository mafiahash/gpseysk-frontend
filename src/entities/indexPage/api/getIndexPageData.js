export async function getIndexPageData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/index-page?populate[seo][populate]=*&populate[mainBlock][populate]=*&populate[linksBlock][populate]=*`,
		{
			cache: 'force-cache',
			next: {
				tags: ['index-page'],
			},
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetch site settings')
	}

	const json = await res.json()
	return json.data
}
