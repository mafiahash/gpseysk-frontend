import ProjectCard from '@/entities/projects/ui/ProjectCard'
import SkeletonProjectCard from '@/entities/projects/ui/SkeletonProjectCard'

export function ProjectsGrid({
	projects,
	className,
	skeletonCount = 4,
	isLoading,
}) {
	const skeletons = Array.from({ length: skeletonCount })
	return (
		<div className={`grid wrapper ${className}`}>
			{isLoading
				? skeletons.map((_, i) => <SkeletonProjectCard key={`sk-${i}`} />)
				: projects.map(project => {
						return (
							<ProjectCard
								key={project.id}
								title={project.name}
								price={project.minPrice}
								size={project.card.size}
								image={project.card.photo?.url}
								documentId={project.documentId}
							/>
						)
				  })}
		</div>
	)
}
