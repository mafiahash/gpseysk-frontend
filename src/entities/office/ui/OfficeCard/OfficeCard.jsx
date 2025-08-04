import { formatPrice } from '@/shared/lib/formatPrice'
import ArrowIcon from '@/shared/ui/ArrowIcon/ArrowIcon'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './OfficeCard.module.css'

export default function OfficeCard({
	title,
	price,
	area,
	size = 'default',
	documentId,
	image,
}) {
	return (
		<NextLink
			href={`/office/${documentId}`}
			className={`${styles.card} rounded pad ${styles[size]}`}
		>
			<ArrowIcon color='white' />
			<div className={styles.info}>
				<h4>{title}</h4>
				<div className={styles.features}>
					<big>{price ? `${formatPrice(price)} ₽` : '— ₽'}</big>
					<span className={styles.dot}></span>
					<big>
						{area} м<sup>2</sup>
					</big>
				</div>
			</div>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
				alt=''
				fill
			/>
		</NextLink>
	)
}
