'use client'

import { useState } from 'react'
import styles from '../page.module.css'

export default function Plans({ className, flatPlan, floorPlan }) {
	const [tab, setTab] = useState('flat')

	return (
		<div className={className}>
			{tab === 'flat' && (
				<img
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${flatPlan?.url}`}
					alt='Планировка квартиры'
				/>
			)}
			{tab === 'floor' && (
				<img
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${floorPlan?.url}`}
					alt='План этажа'
				/>
			)}

			<div className={styles.tabs}>
				<button
					className={tab === 'flat' ? styles.active : ''}
					onClick={() => setTab('flat')}
				>
					Планировка квартиры
				</button>
				<button
					className={tab === 'floor' ? styles.active : ''}
					onClick={() => setTab('floor')}
				>
					План этажа
				</button>
			</div>
		</div>
	)
}
