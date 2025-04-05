import Image from 'next/image'
import NextLink from 'next/link'
import Link from '../ui/Link/Link'
import styles from './MenuBurger.module.css'

export default function MenuBurger({ onClose }) {
	return (
		<>
			<div className={`${styles.MenuBurger} wrapper`}>
				<div className={styles.close} onClick={onClose}>
					<Image src='/icons/close.svg' alt='Закрыть' fill />
				</div>
				<NextLink href='/' className={styles.logo}>
					<Image alt='Гражданпромстрой' src='/logo.svg' fill />
				</NextLink>
				<div className={styles.links}>
					<NextLink href='/'>Новостройки</NextLink>
					<NextLink href='/'>Дома</NextLink>
					<NextLink href='/'>Аренда офисов</NextLink>
					<NextLink href='/'>О нас</NextLink>
				</div>
				<Link href='tel:+79999999999'>+7 (999)999-99-99</Link>
			</div>
		</>
	)
}
