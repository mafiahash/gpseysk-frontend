'use client'
import MenuBurger from '@/components/MenuBurger/MenuBurger'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'
import Link from '../ui/Link/Link'
import styles from './Header.module.css'

export default function Header({ white = false }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<div className={`${styles.header} wrapper ${white ? styles.white : ''}`}>
				<NextLink href='/' className={styles.logo}>
					<Image
						alt='Гражданпромстрой'
						src={white ? '/logowhite.svg' : '/logo.svg'}
						fill
					/>
				</NextLink>
				<div className={styles.links}>
					<NextLink href='/'>Новостройки</NextLink>
					<NextLink href='/'>Дома</NextLink>
					<NextLink href='/'>Аренда офисов</NextLink>
					<NextLink href='/'>О нас</NextLink>
				</div>
				<Link white={white} href='tel:+79999999999'>
					+7 (999)999-99-99
				</Link>
				<div className={styles.menuBurger} onClick={() => setIsOpen(!isOpen)}>
					<Image
						src={white ? '/icons/menuBurgerWhite.svg' : '/icons/menuBurger.svg'}
						alt='Меню'
						fill
					/>
				</div>
				{isOpen && <MenuBurger onClose={() => setIsOpen(false)} />}
			</div>
		</>
	)
}
