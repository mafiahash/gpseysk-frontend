import NextLink from 'next/link'
import styles from './IconWhiteButton.module.css'

export default function IconWhiteButton({ href, children }) {
	return (
		<NextLink className={`${styles.WhiteButton}`} href={href}>
			{children}
		</NextLink>
	)
}
