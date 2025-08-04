import Flat from '@/entities/flats/ui/Flat'

import styles from './FlatsCatalog.module.css'
export function FlatsCatalog({ flats, isLoading }) {
	return (
		<div className={`${styles.catalog} grid wrapper space`}>
			{flats.map(flat => (
				<Flat
					key={flat.id}
					plan={
						flat.flatPlan?.url
							? `${process.env.NEXT_PUBLIC_STRAPI_URL}${flat.flatPlan.url}`
							: null
					}
					rooms={flat.rooms}
					area={flat.area}
					maxFloors={flat.project.maxFloors}
					floor={flat.floor}
					corpus={flat.corpus}
					settlementDate={flat.settlementDate}
					price={flat.price}
					oldPrice={flat.oldPrice}
					href={flat.documentId}
				/>
			))}
		</div>
	)
}
