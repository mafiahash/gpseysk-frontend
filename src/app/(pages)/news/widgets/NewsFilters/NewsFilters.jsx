// app/news/page.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const categories = [
	{ value: 'all', label: 'Все новости' },
	{ value: 'projects', label: 'Новости ЖК' },
	{ value: 'houses', label: 'Новости Домов' },
	{ value: 'office', label: 'Новости Офисов' },
]

export default function NewsFilters() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const initialCategory = searchParams.get('type') || 'all'
	const [selected, setSelected] = useState(initialCategory)

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		params.set('type', selected)
		router.push(`?${params.toString()}`)
	}, [selected, router])

	return (
		<div className='wrapper gap'>
			<select value={selected} onChange={e => setSelected(e.target.value)}>
				{categories.map(cat => (
					<option key={cat.value} value={cat.value}>
						{cat.label}
					</option>
				))}
			</select>
		</div>
	)
}
