'use client'
import ProjectCard from '@/entities/projects/ui/ProjectCard'
import SkeletonProjectCard from '@/entities/projects/ui/SkeletonProjectCard'
import { useRelatedProjects } from '../model/useRelatedProjects'
import styles from './RelatedProjects.module.css'
export function RelatedProjects({}) {
	const { projects, isLoading } = useRelatedProjects({ pageSize: 2 })
	const skeletons = Array.from({ length: 4 })

	return (
		<div className='wrapper space'>
			<h2 className={styles.title}>Похожие проекты</h2>
			<div className='grid'>
				{isLoading
					? skeletons.map((_, i) => <SkeletonProjectCard key={`sk-${i}`} />)
					: projects.map(project => (
							<ProjectCard
								key={project.id}
								title={project.name}
								size='big'
								price={project.minPrice}
								documentId={project.documentId}
								image={project.card.photo.url}
							/>
					  ))}
			</div>
		</div>
	)
}
