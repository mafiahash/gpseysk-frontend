import styles from './NewsSkeletonCard.module.css'
export default function NewsSkeletonCard() {
	return (
		<div className={`${styles.News} rounded pad`}>
			<div className={styles.text}>
				<div
					className={`rounded ${styles.skeleton}`}
					style={{ width: '100%', height: '50px' }}
				></div>
				<div
					className={`rounded ${styles.skeleton}`}
					style={{ width: '100%', height: '70px' }}
				></div>
			</div>
			<div className={styles.d}>
				<div
					className={`rounded ${styles.skeleton}`}
					style={{ width: '30%', height: '20px' }}
				></div>
			</div>
		</div>
	)
}
