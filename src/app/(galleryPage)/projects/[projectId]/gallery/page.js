import FullscreenImage from '@/shared/ui/FullscreenImage/FullscreenImage'
import NextLink from 'next/link'
import styles from './page.module.css'
export default async function GalleyPage({ params }) {
	const { projectId } = await params

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${projectId}?populate[gallery][populate]=photos`,
		{ next: { revalidate: 86400 } }
	)
	const json = await res.json()
	const data = json.data
	console.log(projectId)

	const title = data.name
	const photos = data?.gallery?.photos || []

	return (
		<>
			<div className='wrapper grid'>
				<h2 className={styles.h2}>{title}</h2>
				<NextLink href={`/projects/${projectId}`} className={styles.backButton}>
					← Вернуться назад
				</NextLink>
			</div>
			<div className='wrapper grid space'>
				{photos.map(photo => (
					<FullscreenImage
						key={photo.id}
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
						alt={photo.name || ''}
						className={styles.Photo}
					/>
				))}
			</div>
		</>
	)
}
