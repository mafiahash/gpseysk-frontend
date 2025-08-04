import styles from './SkeletonOfficeCard.module.css'

export default function SkeletonOfficeCard() {
	return (
		<div className={`${styles.Skeleton} rounded pad`}>
			<div></div>
			<div className={styles.i}>
				<div className={styles.s}></div>
				<div className={styles.l}></div>
			</div>
		</div>
	)
}
