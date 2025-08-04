'use client'

import ProjectCard from '@/entities/projects/ui/ProjectCard'
import SkeletonProjectCard from '@/entities/projects/ui/SkeletonProjectCard'
import Link from '@/shared/ui/Link/Link'
import { useProjectsList } from '../model/useProjectsList'

import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@/shared/ui/Button/Button'
import styles from './ProjectsBlock.module.css'

export function ProjectsBlock() {
	const { projects, isLoading } = useProjectsList({ pageSize: 8 })
	const skeletons = Array.from({ length: 4 })

	return (
		<>
			<div className={`${styles.Projects} gap wrapper`}>
				<h2>Новостройки в Ейске</h2>
				<Link style='outline' href='/projects'>
					Смотреть все
				</Link>
			</div>

			<div className='wrapper grid space'>
				<div className={styles.filters}>
					<h4>Фильтр</h4>
					<div className={styles.filter}>
						<small>Год заселения</small>
						<div className={styles.options}>
							<Button className={styles.button}>Заселен</Button>
							<Button className={styles.button}>2025</Button>
							<Button className={styles.button}>2026</Button>
							<Button className={styles.button}>2027+</Button>
						</div>
					</div>
					<Button>Сбросить фильтры</Button>
					<Button variant='primary' className={styles.submit}>
						Смотреть
					</Button>
				</div>
				<Swiper
					slidesPerView={2}
					spaceBetween={4}
					modules={[Scrollbar]}
					cssMode
					scrollbar={{ el: '.scrollbar', draggable: true }}
					className={`${styles.ProjectSwiper} gap`}
				>
					{isLoading
						? skeletons.map((_, i) => (
								<SwiperSlide key={`sk-${i}`}>
									<SkeletonProjectCard />
								</SwiperSlide>
						  ))
						: projects.map(project => (
								<SwiperSlide key={project.id}>
									<ProjectCard
										title={project.name}
										price={project.minPrice}
										documentId={project.documentId}
										image={project.card.photo.url}
									/>
								</SwiperSlide>
						  ))}
				</Swiper>
				<div className={`scrollbar ${styles.scrollbar}`}></div>
			</div>
		</>
	)
}
