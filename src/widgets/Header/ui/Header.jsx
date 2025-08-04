'use client'
import Link from '@/shared/ui/Link/Link'
import { Logo } from '@/shared/ui/Logo/Logo'
import NextLink from 'next/link'
import { useHeader } from '../model/useHeader'
import styles from './Header.module.css'

export function Header() {
	const { phone, isOpen, toggleMenu, closeMenu } = useHeader()

	return (
		<header className={`${styles.header} wrapper`}>
			<NextLink href='/' className={styles.logo}>
				<Logo variant='dark' />
			</NextLink>
			<div className={styles.links}>
				<Link style='transparent' href='/projects'>
					Новостройки
				</Link>
				<Link style='transparent' href='/houses'>
					Дома
				</Link>
				<Link style='transparent' href='/office'>
					Аренда офисов
				</Link>
				<Link style='transparent' href='/about-us'>
					О нас
				</Link>
			</div>
			<Link style='outline' href={`tel:${phone}`} className={styles.phone}>
				{phone}
			</Link>
			{/* бургер-кнопка */}
			<span className={styles.burger} onClick={toggleMenu}>
				<span></span>
			</span>

			{/* мобильное меню */}
			{isOpen && (
				<div className={styles.mobileMenu}>
					<span className={styles.closeButton} onClick={closeMenu}></span>
					<NextLink href='/' className={styles.logo} onClick={closeMenu}>
						<Logo variant='dark' />
					</NextLink>
					<Link style='transparent' href='/projects' onClick={closeMenu}>
						Новостройки
					</Link>
					<Link style='transparent' href='/houses' onClick={closeMenu}>
						Дома
					</Link>
					<Link style='transparent' href='/office' onClick={closeMenu}>
						Офисы
					</Link>
					<Link style='transparent' href='/about-us' onClick={closeMenu}>
						О нас
					</Link>
					<Link
						style='outline'
						href={`tel:${phone}`}
						onClick={closeMenu}
						className={styles.phone}
					>
						{phone}
					</Link>
				</div>
			)}
		</header>
	)
}
