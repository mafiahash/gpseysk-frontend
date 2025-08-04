import ArrowIcon from '@/shared/ui/ArrowIcon/ArrowIcon'
import Image from 'next/image'
import NextLink from 'next/link'
import styles from './LinksBlock.module.css'
export function LinksBlock({ data }) {
	return (
		<div className={`${styles.Nav} wrapper grid space`}>
			<NextLink href='/vacancy' className={`${styles.small} pad rounded`}>
				<ArrowIcon color='white' />
				<h2>Вакансии</h2>
			</NextLink>
			<NextLink
				href='/about-us'
				className={`${styles.small} ${styles.card} pad rounded`}
			>
				<ArrowIcon color='white' />
				<h2>О нас</h2>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.aboutUs.url}`}
					alt=''
					fill
					className={styles.background}
				/>
			</NextLink>
			<NextLink href='/materials' className={`${styles.card} pad rounded`}>
				<ArrowIcon color='white' />
				<h2>Распродажа материала</h2>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.materials.url}`}
					alt=''
					fill
					className={styles.background}
				/>
			</NextLink>
			<NextLink href='/rent' className={` pad rounded`}>
				<ArrowIcon color='white' />
				<h2>Аренда транспорта</h2>
			</NextLink>
		</div>
	)
}
