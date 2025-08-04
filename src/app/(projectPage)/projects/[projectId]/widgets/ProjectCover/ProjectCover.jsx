import { Header } from '@/widgets/Header'
import styles from './ProjectCover.module.css'
export function ProjectCover({ title, subTitle, cover }) {
	return (
		<div
			className={`${styles.cover} space`}
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cover})`,
			}}
		>
			<div className={`wrapper`}>
				<Header />
				<div className={styles.texts}>
					<h1>{title}</h1>
					<h4>{subTitle}</h4>
				</div>
			</div>
		</div>
	)
}
