import OfficeCard from '@/entities/office/ui/OfficeCard/OfficeCard'
import SkeletonOfficeCard from '@/entities/office/ui/OfficeCard/SkeletonOfficeCard'

function OfficeGrid({ offices, isLoading, skeletonCount = 4 }) {
	const skeletons = Array.from({ length: skeletonCount })
	console.log(offices)
	return (
		<div className='wrapper grid space'>
			{isLoading
				? skeletons.map((_, i) => <SkeletonOfficeCard key={`sk-${i}`} />)
				: offices.map(office => {
						return (
							<OfficeCard
								key={office.id}
								title={office.name}
								price={office.price}
								area={office.area}
								size={office.card.size}
								image={office.card.photo?.url}
								documentId={office.documentId}
							/>
						)
				  })}
		</div>
	)
}

export default OfficeGrid
