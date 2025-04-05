import Image from 'next/image'
import NextLink from 'next/link'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, price, type }) {
	return (
		<NextLink href='/' className={`${styles.card} rounded pad ${styles[type]}`}>
			<div className={styles.icon}>
				<Image src='/icons/arrow.svg' alt='' fill />
			</div>
			<div className={styles.info}>
				<h4>{title}</h4>
				<big>от {price} ₽</big>
			</div>
			<Image src='/img/intro.png' alt='' fill />
		</NextLink>
	)
}
