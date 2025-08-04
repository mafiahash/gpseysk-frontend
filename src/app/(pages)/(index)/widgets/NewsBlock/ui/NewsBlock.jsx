'use client'

import { getNews } from '@/entities/news/api/getNews'
import { useEffect, useState } from 'react'
import 'swiper/css'

import Link from '@/shared/ui/Link/Link'

import { NewsSwiper } from '@/widgets/NewsSwiper'
import styles from './NewsBlock.module.css'

export function NewsBlock() {
	const [newsList, setNewsList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await getNews({ limit: 4 })
				setNewsList(res.data)
			} catch (err) {
				console.error('Ошибка при загрузке новостей', err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return (
		<>
			<div className={`${styles.News} wrapper`}>
				<h2>Новости</h2>
				<Link style='outline' href='/news'>
					Смотреть все
				</Link>
			</div>
			<NewsSwiper newsList={newsList} isLoading={isLoading} />
		</>
	)
}
