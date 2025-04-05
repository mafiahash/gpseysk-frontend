import NextLink from 'next/link'
import styles from './WhiteButton.module.css'

export default function WhiteButton({ href, children }) {
	return (
		<NextLink className={`${styles.WhiteButton}`} href={href}>
			{children}
		</NextLink>
	)
}
