'use client'
import { getNews } from '@/entities/news/api/getNews'
import Link from '@/shared/ui/Link/Link'
import { NewsSwiper } from '@/widgets/NewsSwiper'
import { useEffect, useState } from 'react'
import styles from './NewsBlock.module.css'

export function NewsBlock({ projectId }) {
	const [news, setNews] = useState([])
	const [notFound, setNotFound] = useState(false)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const fetchNews = async () => {
			const res = await getNews({ filters: { project: projectId }, limit: '4' })

			setNews(res.data || [])
			setTotal(res.meta?.pagination?.total || 0)
			setNotFound(res.data.length === 0)
		}

		fetchNews()
	}, [projectId])

	return notFound ? null : (
		<>
			<div className='wrapper space'>
				<h2 className={styles.title}>Новости</h2>
				<NewsSwiper newsList={news} />
				{total >= 5 && (
					<Link
						className={styles.button}
						style='outline'
						href={`/news?project=${projectId}`}
					>
						Смотреть все
					</Link>
				)}
			</div>
		</>
	)
}
