import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
	return (
		<div className={`wrapper ${styles.header}`}>
			<Link href='/' className={styles.logo}>
				<Image alt='Гражданпромстрой' src={'/logo-dark.svg'} fill />
			</Link>
			<h4>Напишите нам</h4>
		</div>
	)
}
