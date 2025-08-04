import NextLink from 'next/link'
import styles from './page.module.css'
export default async function DocumentsPage({ params }) {
	const { projectId } = await params

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects/${projectId}?populate[documents][populate]=file`,
		{ next: { revalidate: 86400 } }
	)
	const json = await res.json()
	const data = json.data

	const title = data.name
	const documents = data?.documents || []

	return (
		<>
			<div className='wrapper grid'>
				<h2 className={styles.h2}>
					Документация застройщика
					<br />
					{title}
				</h2>
				<NextLink href={`/projects/${projectId}`} className={styles.backButton}>
					← Вернуться назад
				</NextLink>
			</div>
			<div className='wrapper grid space'>
				{documents.map(doc =>
					doc.file.map(file => (
						<NextLink
							key={file.id}
							className={styles.document}
							href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${file.url}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<h4>{doc.title}</h4>
							<p className={styles.documentMeta}>
								{file.ext.replace('.', '')}, {(file.size / 1024).toFixed(2)} Мб
							</p>
						</NextLink>
					))
				)}
			</div>
		</>
	)
}
