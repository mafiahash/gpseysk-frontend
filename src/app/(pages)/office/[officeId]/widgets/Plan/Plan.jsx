'use client'
import Button from '@/shared/ui/Button/Button'
import { useState } from 'react'
import styles from './Plan.module.css'

export default function Plan({ plan }) {
	const [activeIdx, setActiveIdx] = useState(0)

	// Безопасно достаём активный план
	const activePlan = Array.isArray(plan) ? plan[activeIdx] : null

	return (
		<div className={`${styles.plan} pad rounded`}>
			{/* Картинка активного плана */}
			{activePlan && (
				<img
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${activePlan.url}`}
					alt={activePlan.caption || 'Планировка'}
				/>
			)}

			{/* Таб- переключатели */}
			<div className={styles.tabs}>
				{Array.isArray(plan) &&
					plan.map((item, idx) => (
						<Button
							key={item.id ?? idx}
							className={styles.btn}
							active={idx === activeIdx}
							onClick={() => setActiveIdx(idx)}
						>
							{item.caption || `План ${idx + 1}`}
						</Button>
					))}
			</div>
		</div>
	)
}
