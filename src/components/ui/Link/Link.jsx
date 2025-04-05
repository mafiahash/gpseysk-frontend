import NextLink from 'next/link'
import styles from './Link.module.css'

export default function Link({ href, children, white }) {
	return (
		<NextLink
			className={`${white ? styles.white : ''} ${styles.Link}`}
			href={href}
		>
			{children}
		</NextLink>
	)
}
