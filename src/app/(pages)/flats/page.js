'use client'
import { useSearchParams } from 'next/navigation'
import { FlatsCatalog } from './widgets/FlatsCatalog'
import { useFlatsCatalog } from './widgets/FlatsCatalog/model/useFlatsCatalog'
import { FlatsTitle } from './widgets/FlatsTitle'

export default function FlatsPage() {
	const params = useSearchParams()
	const projectId = params.get('project') || undefined
	const { flats, isLoading, error } = useFlatsCatalog({ projectId })
	return (
		<>
			<FlatsTitle />
			<FlatsCatalog flats={flats} isLoading={isLoading} />
		</>
	)
}
