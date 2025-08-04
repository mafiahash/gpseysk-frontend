import FullscreenImage from '@/shared/ui/FullscreenImage/FullscreenImage'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './GalleryBlock.module.css'
export function GalleryBlock({ photos, projectId }) {
	const isMoreThanFive = photos.length > 5
	const visiblePhotos = isMoreThanFive ? photos.slice(0, 4) : photos
	return (
		<div className={`${styles.Gallery} wrapper grid space`}>
			{visiblePhotos.map((photo, index) => (
				<FullscreenImage
					key={photo.id}
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.url}`}
					alt={photo.name || ''}
					className={styles.Photo}
				/>
			))}

			{isMoreThanFive ? (
				<NextLink
					href={`/projects/${projectId}/gallery`}
					className={`${styles.button} rounded pad`}
				>
					<div className={styles.icon}>
						<Image src='/icons/arrow.svg' alt='' fill />
					</div>
					<h4>Смотреть все</h4>
				</NextLink>
			) : (
				photos.length === 5 && (
					<FullscreenImage
						key={photos[4].id}
						src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photos[4].url}`}
						alt={photos[4].name || ''}
						className={styles.Photo}
					/>
				)
			)}
		</div>
	)
}
