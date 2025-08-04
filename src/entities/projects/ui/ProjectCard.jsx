import { formatPrice } from '@/shared/lib/formatPrice'
import ArrowIcon from '@/shared/ui/ArrowIcon/ArrowIcon'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
	title,
	price,
	size = 'default',
	documentId,
	image,
}) {
	return (
		<NextLink
			href={`/projects/${documentId}`}
			className={`${styles.card} rounded pad ${styles[size]}`}
		>
			<ArrowIcon color='white' />
			<div className={styles.info}>
				<h4>{title}</h4>
				<big>от {price ? `${formatPrice(price)} ₽` : '— ₽'}</big>
			</div>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
				alt=''
				fill
			/>
		</NextLink>
	)
}
