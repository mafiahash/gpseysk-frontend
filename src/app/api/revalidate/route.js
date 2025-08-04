import { revalidateTag } from 'next/cache'

export async function POST(request) {
	const { searchParams } = new URL(request.url)
	const secret = searchParams.get('secret')

	if (secret !== process.env.REVALIDATE_SECRET) {
		return new Response('Unauthorized', { status: 401 })
	}

	const body = await request.json()
	console.log(body)
	const model = body?.model

	if (!model) {
		return new Response('Missing model in payload', { status: 400 })
	}

	try {
		revalidateTag(model)
		return new Response(`Revalidated tag: ${model}`, { status: 200 })
	} catch (err) {
		console.error(err)
		return new Response(`Error revalidating tag: ${model}`, { status: 500 })
	}
}
