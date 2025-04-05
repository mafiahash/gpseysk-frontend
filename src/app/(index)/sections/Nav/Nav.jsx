import Image from 'next/image'
import NextLink from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
	return (
		<div className={`${styles.Nav} wrapper grid space`}>
			<NextLink href='/' className={`${styles.small} pad rounded`}>
				<div className={styles.icon}>
					<Image src='/icons/arrow.svg' alt='' fill />
				</div>
				<h2>Вакансии</h2>
			</NextLink>
			<NextLink
				href='/'
				className={`${styles.small} ${styles.card} pad rounded`}
			>
				<div className={styles.icon}>
					<Image src='/icons/arrow.svg' alt='' fill />
				</div>
				<h2>О нас</h2>
				<Image src='/img/intro.png' alt='' fill className={styles.background} />
			</NextLink>
			<NextLink href='/' className={`${styles.card} pad rounded`}>
				<div className={styles.icon}>
					<Image src='/icons/arrow.svg' alt='' fill />
				</div>
				<h2>Распродажа материала</h2>
				<Image src='/img/intro.png' alt='' fill className={styles.background} />
			</NextLink>
			<NextLink href='/' className={` pad rounded`}>
				<div className={styles.icon}>
					<Image src='/icons/arrow.svg' alt='' fill />
				</div>
				<h2>Аренда транспорта</h2>
			</NextLink>
		</div>
	)
}
