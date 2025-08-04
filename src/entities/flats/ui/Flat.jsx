import { formatPrice } from '@/shared/lib/formatPrice'
import { formatRooms } from '@/shared/lib/formatRooms'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './Flat.module.css'

export default function Flat({
	plan,
	rooms,
	area,
	maxFloors,
	floor,
	corpus,
	settlementDate,
	price,
	oldPrice,
	href,
}) {
	const formatted = format(new Date(settlementDate), 'LLLL yyyy', {
		locale: ru,
	}).replace(/^./, letter => letter.toUpperCase())

	return (
		<div className={styles.flat}>
			<NextLink
				href={`/flats/${href}`}
				className={`${styles.plan} rounded pad`}
			>
				<div>
					<Image src={plan || null} fill alt='' />
				</div>
			</NextLink>
			<div className={styles.info}>
				<div className={styles.title}>
					<h4>
						{formatRooms(rooms)}, {area} м
					</h4>
					<sub>2</sub>
				</div>

				<div className={styles.details}>
					<small>
						Этаж{' '}
						<span>
							{floor}/{maxFloors}
						</span>
					</small>
					<span></span>
					<small>
						Корпус <span>{corpus}</span>
					</small>
					<span></span>
					<small>
						Заселение <span>{formatted}</span>
					</small>
				</div>
				<div className={styles.price}>
					<big>{price ? `${formatPrice(price)} ₽` : '— ₽'}</big>
					{oldPrice && (
						<small className='smaller'>
							{oldPrice ? `${formatPrice(oldPrice)} ₽` : '— ₽'}
						</small>
					)}
				</div>
			</div>
		</div>
	)
}
