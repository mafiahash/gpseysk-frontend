'use client'
import { getFlats } from '@/entities/flats/api/getFlats'
import Flat from '@/entities/flats/ui/Flat'
import Link from '@/shared/ui/Link/Link'
import { useEffect, useState } from 'react'
import styles from './FlatsBlock.module.css'

export default function FlatsBlock({ projectId }) {
	const [flats, setFlats] = useState([])
	const [notFound, setNotFound] = useState(false)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const fetchFlats = async () => {
			const res = await getFlats({ projectId: projectId, pageSize: '4' })

			setFlats(res.data || [])
			setTotal(res.meta?.pagination?.total || 0)
			setNotFound(res.data.length === 0)
		}

		fetchFlats()
	}, [projectId])
	return (
		<div className='wrapper space'>
			<h2 className={styles.title}>Квартиры</h2>

			{notFound ? (
				<div className='notFound wrapper'>
					<h3>По заданным параметрам не удалось ничего подобрать</h3>
					<small>Попробуйте изменить настройки фильтров</small>
				</div>
			) : (
				<>
					<div className='grid gap'>
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
					{total >= 5 && (
						<Link
							className={styles.button}
							style='outline'
							href={`/flats?project=${projectId}`}
						>
							Смотреть все
						</Link>
					)}
				</>
			)}
		</div>
	)
}
