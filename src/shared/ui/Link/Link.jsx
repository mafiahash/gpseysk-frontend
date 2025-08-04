import NextLink from 'next/link'
import styles from './Link.module.css'

export default function Link({
	children,
	href,
	style = 'primary',
	size = 'default',
	className,
	...rest
}) {
	return (
		<NextLink
			href={href}
			className={`${styles.Link} ${styles[style]} ${styles[size]} ${className}`}
			{...rest}
		>
			{children}
		</NextLink>
	)
}
