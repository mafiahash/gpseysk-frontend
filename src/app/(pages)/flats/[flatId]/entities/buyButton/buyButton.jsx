'use client'

import { useRouter } from 'next/navigation'
import styles from './buyButton.module.css' // если нужен стиль

export default function BuyButton({
	flatId,
	purchaseType = 'full',
	flatStatus,
}) {
	const router = useRouter()

	const handleClick = () => {
		if (!flatStatus) return
		router.push(
			`/checkout?type=flat&object=${flatId}&paymentType=${purchaseType}`
		)
	}

	let label = 'Купить'
	if (flatStatus === 'sold') label = 'Продано'
	if (flatStatus === 'reserved') label = 'Забронировано'

	return (
		<button
			className={`${styles.button} ${
				flatStatus !== 'available' ? styles.disabled : ''
			}`}
			onClick={handleClick}
			disabled={flatStatus !== 'available'}
		>
			<big>{label}</big>
		</button>
	)
}
