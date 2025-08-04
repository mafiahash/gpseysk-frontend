import { HeroBlock } from '@/app/(pages)/(index)/widgets/HeroBlock'
import { LinksBlock } from '@/app/(pages)/(index)/widgets/LinksBlock'
import { NewsBlock } from '@/app/(pages)/(index)/widgets/NewsBlock'
import { ProjectsBlock } from '@/app/(pages)/(index)/widgets/ProjectsBlock'
import { getIndexPageData } from '@/entities/indexPage/api/getIndexPageData'

export default async function Home() {
	const data = await getIndexPageData()
	return (
		<>
			<HeroBlock data={data.mainBlock} />
			<ProjectsBlock />
			<LinksBlock data={data.linksBlock} />
			<NewsBlock />
		</>
	)
}
