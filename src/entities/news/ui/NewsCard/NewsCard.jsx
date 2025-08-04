import { formatDate } from '@/shared/lib/formatDate'
import ArrowIcon from '@/shared/ui/ArrowIcon/ArrowIcon'
import NextLink from 'next/link'
import styles from './NewsCard.module.css'
export default function NewsCard({ header, description, date, newsId }) {
	return (
		<NextLink
			href={`/news/${newsId}`}
			className={`${styles.newsCard} rounded pad`}
		>
			<div className={styles.text}>
				<h4>{header}</h4>
				<p>{description}</p>
			</div>
			<div className={styles.d}>
				<p>{formatDate(date)}</p>
				<ArrowIcon className={styles.icon} />
			</div>
		</NextLink>
	)
}
