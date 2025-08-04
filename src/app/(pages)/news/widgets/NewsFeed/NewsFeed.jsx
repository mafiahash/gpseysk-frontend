import NewsCard from '@/entities/news/ui/NewsCard/NewsCard'

export default function NewsFeed({ items }) {
	return (
		<div className='grid wrapper space'>
			{items.map(item => (
				<NewsCard
					key={item.id}
					header={item.title}
					description={item.shortDescription}
					date={item.createdAt}
					newsId={item.documentId}
				/>
			))}
		</div>
	)
}
