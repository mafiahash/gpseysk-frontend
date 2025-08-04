'use client'
import { getFlats } from '@/entities/flats/api/getFlats'
import { useEffect, useState } from 'react'

/**
 * Загружает список квартир для выбранного проекта.
 * @param {Object} options
 * @param {string|number} options.projectId
 */
export function useFlatsCatalog({ projectId } = {}) {
	const [flats, setFlats] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		let mounted = true
		setIsLoading(true)
		setError(null)

		getFlats({ projectId })
			.then(res => {
				if (mounted) setFlats(res.data || [])
			})
			.catch(e => {
				if (mounted) setError(e)
			})
			.finally(() => {
				if (mounted) setIsLoading(false)
			})

		return () => {
			mounted = false
		}
	}, [projectId])

	return { flats, isLoading, error }
}
