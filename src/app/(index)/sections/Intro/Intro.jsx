import WhiteButton from '@/components/ui/WhiteButton/WhiteButton'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './Intro.module.css'
export default function Intro() {
	return (
		<div className={`${styles.Intro} wrapper grid space`}>
			<div className={`${styles.big} rounded`}>
				<Image src='/img/intro.png' fill alt='Гражданпромстрой' />
			</div>
			<div className={`${styles.long} rounded pad`}>
				<h1>Новостройки по выгодным ценам</h1>
				<WhiteButton href='/'>Смотреть все</WhiteButton>
			</div>
			<NextLink href='/' className={`${styles.small} rounded pad`}>
				<h3>Аренда офисов</h3>
				<Image src='/img/1.png' fill alt='Аренда офисов' />
			</NextLink>
			<NextLink href='/' className={`${styles.small} rounded pad`}>
				<h3>Купить дом</h3>
				<Image src='/img/intro.png' fill alt='Купить дом' />
			</NextLink>
		</div>
	)
}
