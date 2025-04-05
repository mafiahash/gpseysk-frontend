import Image from 'next/image'
import NextLink from 'next/link'
import styles from './News.module.css'
export default function News({ header, description, date }) {
	return (
		<NextLink href='/' className={`${styles.News} rounded pad`}>
			<div className={styles.text}>
				<h4>{header}</h4>
				<p>{description}</p>
			</div>
			<div className={styles.d}>
				<p>{date}</p>
				<div className={styles.icon}>
					<Image src='/icons/arrowGreen.svg' alt='' fill />
				</div>
			</div>
		</NextLink>
	)
}
