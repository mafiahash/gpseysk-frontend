// Хук бизнес-логики для блока Projects
import { getProjects } from '@/entities/projects/api/getProjects'
import { useEffect, useState } from 'react'

/**
 * Загружает список проектов, опираясь на query-параметры URL.
 * @param {Object} options
 * @param {number} [options.pageSize=2]
 */
export function useRelatedProjects({ pageSize = 2 } = {}) {
	const [projects, setProjects] = useState([])
	const [meta, setMeta] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		let mounted = true

		async function fetchData() {
			try {
				const res = await getProjects({
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
	}, [pageSize])

	return { projects, meta, isLoading }
}
