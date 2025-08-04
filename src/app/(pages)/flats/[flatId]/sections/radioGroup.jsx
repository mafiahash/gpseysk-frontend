'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from '../page.module.css'

export default function RadioGroup() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const purchaseType = searchParams.get('purchaseType') || 'full'

	const handleChange = type => {
		const params = new URLSearchParams(searchParams)
		params.set('purchaseType', type)
		router.replace(`?${params.toString()}`, { scroll: false })
	}

	return (
		<div className={styles.buyingType}>
			<h4>Условия покупки</h4>
			<div className={styles.types}>
				<label>
					<input
						type='radio'
						name='purchase'
						checked={purchaseType === 'mortgage'}
						onChange={() => handleChange('mortgage')}
					/>
					<span></span>
					<p>В ипотеку</p>
				</label>
				<label>
					<input
						type='radio'
						name='purchase'
						checked={purchaseType === 'full'}
						onChange={() => handleChange('full')}
					/>
					<span></span>
					<p>Полная оплата</p>
				</label>
			</div>
		</div>
	)
}
