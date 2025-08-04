'use client'
import { getOffices } from '@/entities/office/api/getOffices'
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle'
import { useEffect, useState } from 'react'
import OfficeGrid from './widgets/OfficeGrid/OfficeGrid'

export default function OfficesPage() {
	const [OfficeList, setOfficeList] = useState([])
	const [OfficeMeta, setOfficeMeta] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await getOffices()

				setOfficeList(res.data)
				setOfficeMeta(res.meta)
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
			<PageTitle>Аренда офисов</PageTitle>
			<OfficeGrid offices={OfficeList} isLoading={isLoading} />
		</>
	)
}
