export async function getProject({ projectId } = {}) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${projectId}?populate[cover][populate][photo][fields]=url&populate=description&populate[documents][populate][file][fields]=url&populate[gallery][populate][photos][fields]=url&populate[map][populate][mainPointPhoto][fields][0]=url&populate[map][populate][point]=*`,
		{
			cache: 'force-cache',
			next: {
				tags: ['project'],
			},
		}
	)

	if (!res.ok) throw new Error('Не удалось загрузить проекты')

	const json = await res.json()
	return json.data
}
