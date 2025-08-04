import { formatPrice } from '@/shared/lib/formatPrice'
import { formatRooms } from '@/shared/lib/formatRooms'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import BuyButton from './entities/buyButton/buyButton'
import styles from './page.module.css'
import Plans from './sections/Plans'
import RadioGroup from './sections/radioGroup'

export default async function Flat({ params, searchParams }) {
	const { projectId, flatId } = await params

	const resolvedSearchParams = await searchParams
	const purchaseType = resolvedSearchParams?.purchaseType || 'full'

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/flats/${flatId}?populate=*`,
		{
			next: {
				revalidate: 300,
			},
		}
	)
	const json = await res.json()
	const data = json.data

	const formatted = format(new Date(data.settlementDate), 'LLLL yyyy', {
		locale: ru,
	}).replace(/^./, letter => letter.toUpperCase())
	return (
		<>
			<div className={`wrapper gap ${styles.flat}`}>
				<Plans
					className={`${styles.plan} rounded pad`}
					flatPlan={data.flatPlan}
					floorPlan={data.floorPlan}
				/>
				<div className={`${styles.info} rounded pad`}>
					<div className={styles.details}>
						<div className={styles.title}>
							<h3>
								{formatRooms(data.rooms)}, {data.area} м<sup>2</sup>
							</h3>
							<div className={styles.price}>
								<h4>{data.price ? `${formatPrice(data.price)} ₽` : '— ₽'}</h4>
								{data.oldPrice && (
									<small className='smaller'>
										{data.oldPrice ? `${formatPrice(data.oldPrice)} ₽` : '— ₽'}
									</small>
								)}
							</div>
						</div>

						<span></span>

						<div className={styles.infoTable}>
							<div className={styles.item}>
								<p>Этаж</p>
								<p>
									{data.floor}/{data.project?.maxFloors}
								</p>
							</div>

							<div className={styles.item}>
								<p>Корпус</p>
								<p>{data.corpus}</p>
							</div>

							<div className={styles.item}>
								<p>Заселение</p>
								<p>{formatted}</p>
							</div>

							<div className={styles.item}>
								<p>Проект</p>
								<p>{data.project?.name}</p>
							</div>
						</div>

						<span></span>
						<RadioGroup />
					</div>
					<BuyButton
						flatId={flatId}
						purchaseType={purchaseType}
						flatStatus={data.flatStatus}
					/>
				</div>
			</div>
		</>
	)
}
