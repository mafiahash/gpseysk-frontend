import styles from './PageTitle.module.css'
export function PageTitle({ className, children }) {
	return (
		<h1 className={`${styles.title} ${className} wrapper gap`}>{children}</h1>
	)
}
