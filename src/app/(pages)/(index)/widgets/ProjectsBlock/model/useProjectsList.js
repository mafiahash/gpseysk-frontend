// Хук бизнес-логики для блока Projects
import { getProjects } from '@/entities/projects/api/getProjects'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * Загружает список проектов, опираясь на query-параметры URL.
 * @param {Object} options
 * @param {number} [options.pageSize=8]
 */
export function useProjectsList({ pageSize = 8 } = {}) {
	const [projects, setProjects] = useState([])
	const [meta, setMeta] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	const params = useSearchParams()

	useEffect(() => {
		let mounted = true

		async function fetchData() {
			try {
				const res = await getProjects({
					settlementDate: params.get('settlementDate') ?? undefined,
					minPrice: params.get('minPrice') ?? undefined,
					maxPrice: params.get('maxPrice') ?? undefined,
					pageSize,
				})

				if (mounted) {
					setProjects(res.data)
					setMeta(res.meta)
				}
			} catch (err) {
				console.error('Ошибка при загрузке проектов', err)
			} finally {
				if (mounted) setIsLoading(false)
			}
		}

		fetchData()
		return () => {
			mounted = false
		}
	}, [params, pageSize])

	return { projects, meta, isLoading }
}
