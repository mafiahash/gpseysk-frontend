import Link from '@/shared/ui/Link/Link'
import styles from './DescriptionBlock.module.css'
export function DescriptionBlock({ title, description, documents, href }) {
	return (
		<div className={`${styles.description} wrapper grid space`}>
			<h2>{title}</h2>
			<p>{description}</p>
			{documents?.some(
				doc => Array.isArray(doc.file) && doc.file.length > 0
			) && (
				<Link style='outline' href={`${href}/documents`}>
					Документация застройщика
				</Link>
			)}
		</div>
	)
}
