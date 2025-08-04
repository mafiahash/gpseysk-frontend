import { getProject } from '@/entities/projects/api/getProject'
import { DescriptionBlock } from '@/widgets/DescriptionBlock'
import { GalleryBlock } from '@/widgets/GalleryBlock'
import FlatsBlock from './widgets/FlatsBlock/FlatsBlock'
import { NewsBlock } from './widgets/NewsBlock/NewsBlock'
import { ProjectCover } from './widgets/ProjectCover/ProjectCover'
import { RelatedProjects } from './widgets/RelatedProjects/ui/RelatedProjects'

export default async function ProjectPage({ params }) {
	const project = await getProject({ projectId: params.projectId })
	const { projectId } = await params

	return (
		<>
			<ProjectCover
				title={project.name}
				subTitle={project.cover.subTitle}
				cover={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.cover.photo.url}`}
			/>
			<DescriptionBlock
				title={project.description.title}
				description={project.description.description}
				documents={project.documents}
				href={projectId}
			/>
			<GalleryBlock
				photos={project.gallery?.photos || []}
				projectId={projectId}
			/>
			<FlatsBlock projectId={projectId} />
			<NewsBlock projectId={projectId} />
			<RelatedProjects projectId={projectId} />
		</>
	)
}
