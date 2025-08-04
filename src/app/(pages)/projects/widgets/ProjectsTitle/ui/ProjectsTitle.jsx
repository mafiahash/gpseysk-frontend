import styles from './ProjectsTitle.module.css'
export function ProjectsTitle({ className }) {
	return (
		<h1 className={`${styles.title} ${className} wrapper`}>
			Новостройки в Ейске
		</h1>
	)
}
