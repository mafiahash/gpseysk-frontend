import { getNewsItem } from '@/entities/news/api/getNewsItem'
import { formatDate } from '@/shared/lib/formatDate'
import BackButton from '@/shared/ui/BackButton/BackButton'
import styles from './page.module.css'
import RenderNews from './sections/renderNews'

export default async function CurrentNewsPage({ params }) {
	const { newsId } = await params

	const post = await getNewsItem(newsId)

	return (
		<>
			<div className={`${styles.newsPage} wrapper grid space`}>
				<h1>{post.title}</h1>
				<div className={styles.controls}>
					<BackButton />
					<p>{formatDate(post.createdAt)}</p>
				</div>
				<RenderNews content={post.body} />
			</div>
		</>
	)
}
