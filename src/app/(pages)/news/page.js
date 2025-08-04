import { getNews } from '@/entities/news/api/getNews'
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle'
import NewsFeed from './widgets/NewsFeed/NewsFeed'
import NewsFilters from './widgets/NewsFilters/NewsFilters'

export default async function NewsPage({ searchParams = {} }) {
	const { project, house, office, type } = await searchParams
	const filters = { project, house, office, type }

	const res = await getNews({ filters })
	const news = res.data

	return (
		<>
			<PageTitle>Новости</PageTitle>
			<NewsFilters />
			<NewsFeed items={news} />
			{news.length === 0 && <h2>Новостей по выбранному фильтру нет.</h2>}
		</>
	)
}
