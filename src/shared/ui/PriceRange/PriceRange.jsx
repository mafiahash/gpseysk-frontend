'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './PriceRange.module.css'

// 🔁 debounce хук
function useDebouncedValue(value, delay = 500) {
	const [debounced, setDebounced] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(handler)
	}, [value, delay])

	return debounced
}

function formatNumber(value) {
	if (typeof value !== 'string') value = String(value ?? '')
	const number = value.replace(/\s/g, '').replace(/[^\d]/g, '')
	return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function parseNumber(formatted) {
	return formatted.replace(/\s/g, '')
}

export default function PriceRange({ min, max }) {
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')

	const debouncedMin = useDebouncedValue(minPrice)
	const debouncedMax = useDebouncedValue(maxPrice)

	const searchParams = useSearchParams()
	const pathname = usePathname()
	const router = useRouter()

	useEffect(() => {
		const resetHandler = () => {
			setMinPrice('')
			setMaxPrice('')
		}
		window.addEventListener('resetFilters', resetHandler)

		return () => {
			window.removeEventListener('resetFilters', resetHandler)
		}
	}, [])

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString())

		if (debouncedMin) {
			params.set('minPrice', parseNumber(debouncedMin))
		} else {
			params.delete('minPrice')
		}

		if (debouncedMax) {
			params.set('maxPrice', parseNumber(debouncedMax))
		} else {
			params.delete('maxPrice')
		}

		router.replace(`${pathname}?${params.toString()}`, { scroll: false })
	}, [debouncedMin, debouncedMax])

	return (
		<div className={styles.inputs}>
			<small>от</small>
			<input
				type='text'
				inputMode='numeric'
				placeholder={formatNumber(min)}
				value={minPrice}
				onChange={e => setMinPrice(formatNumber(e.target.value))}
				onBlur={() => {
					const parsedMin = parseInt(parseNumber(minPrice))
					const parsedMax = parseInt(parseNumber(maxPrice))
					if (parsedMin < min) {
						setMinPrice(formatNumber(min.toString()))
					}
					if (maxPrice && parsedMin > parsedMax) {
						setMaxPrice(formatNumber(parsedMin.toString()))
					}
				}}
			/>
			<small>₽</small>
			<small>—</small>
			<small>до</small>
			<input
				type='text'
				inputMode='numeric'
				placeholder={formatNumber(max)}
				value={maxPrice}
				onChange={e => setMaxPrice(formatNumber(e.target.value))}
				onBlur={() => {
					const parsed = parseInt(parseNumber(maxPrice))
					const fallback = minPrice ? parseInt(parseNumber(minPrice)) : min
					if (parsed < fallback) {
						setMaxPrice(formatNumber(fallback.toString()))
					}
				}}
			/>
			<small>₽</small>
		</div>
	)
}
