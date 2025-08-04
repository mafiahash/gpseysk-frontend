import Link from '@/shared/ui/Link/Link'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './HeroBlock.module.css'
export function HeroBlock({ data }) {
	return (
		<div className={`wrapper grid space`}>
			<div className={`${styles.big} rounded`}>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.photo.url}`}
					fill
					alt='Гражданпромстрой'
				/>
			</div>
			<div className={`${styles.long} rounded pad`}>
				<h1>Новостройки по выгодным ценам</h1>
				<Link style='secondary' size='big' href='/projects'>
					<big>Смотреть все</big>
				</Link>
			</div>
			<NextLink href='/office' className={`${styles.small} rounded pad`}>
				<h3>Аренда офисов</h3>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.office.url}`}
					fill
					alt='Аренда офисов'
				/>
			</NextLink>
			<NextLink href='/houses' className={`${styles.small} rounded pad`}>
				<h3>Купить дом</h3>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.house.url}`}
					fill
					alt='Купить дом'
				/>
			</NextLink>
		</div>
	)
}
