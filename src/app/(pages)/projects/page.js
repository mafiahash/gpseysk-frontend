'use client'
import { getProjects } from '@/entities/projects/api/getProjects'
import { useEffect, useState } from 'react'
import { ProjectsGrid } from './widgets/ProjectsGrid'
import { ProjectsTitle } from './widgets/ProjectsTitle'

export default function Projects() {
	const [ProjectsList, setProjectsList] = useState([])
	const [ProjectsMeta, setProjectsMeta] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await getProjects()
				setProjectsList(res.data)
				setProjectsMeta(res.meta)
			} catch (err) {
				console.error('Ошибка при загрузке новостей', err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])
	return (
		<>
			<ProjectsTitle className={`gap`} />
			<ProjectsGrid
				projects={ProjectsList}
				isLoading={isLoading}
				className={`space`}
			/>
		</>
	)
}
