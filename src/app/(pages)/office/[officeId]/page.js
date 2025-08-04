import { getOffice } from '@/entities/office/api/getOffice'
import styles from './page.module.css'
import Plan from './widgets/Plan/Plan'

export default async function OfficePage({ params }) {
	const { officeId } = await params

	const office = await getOffice({ officeId })
	console.log({ office })

	return (
		<>
			<div className={`wrapper space ${styles.office}`}>
				<Plan plan={office.plan} />
			</div>
		</>
	)
}
