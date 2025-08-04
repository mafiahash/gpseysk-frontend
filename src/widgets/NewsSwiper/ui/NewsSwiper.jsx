'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import NewsCard from '@/entities/news/ui/NewsCard/NewsCard'
import NewsCardSkeleton from '@/entities/news/ui/NewsCard/NewsSkeletonCard'

import styles from './NewsSwiper.module.css'

export function NewsSwiper({ newsList, isLoading, skeletonCount = 4 }) {
	const skeletons = Array.from({ length: skeletonCount })

	return (
		<Swiper
			slidesPerView={1.5}
			spaceBetween={4}
			breakpoints={{
				605: { slidesPerView: 2.5 },
				768: { slidesPerView: 3 },
				1024: { slidesPerView: 4 },
			}}
			className={`${styles.NewsSwiper} wrapper gap`}
		>
			{isLoading
				? skeletons.map((_, i) => (
						<SwiperSlide key={`sk-${i}`}>
							<NewsCardSkeleton />
						</SwiperSlide>
				  ))
				: newsList.map(news => (
						<SwiperSlide key={news.id}>
							<NewsCard
								header={news.title}
								description={news.shortDescription}
								date={news.createdAt}
								newsId={news.newsId ?? news.documentId}
							/>
						</SwiperSlide>
				  ))}
		</Swiper>
	)
}
