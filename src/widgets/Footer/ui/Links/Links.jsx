import NextLink from 'next/link'
import styles from './Links.module.css'
export function Links() {
	return (
		<div className={styles.links}>
			<NextLink href='/project'>Новостройки</NextLink>
			<NextLink href='/office'>Аренда офисов</NextLink>
			<NextLink href='/houses'>Дома</NextLink>
			<NextLink href='/about-us'>О нас</NextLink>
		</div>
	)
}
