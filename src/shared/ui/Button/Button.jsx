import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({
	children,
	onClick,
	variant = 'default', // или 'primary', 'outline'
	size = 'default',
	disabled = false,
	loading = false,
	active = false,
	className,
	...rest
}) {
	return (
		<button
			onClick={onClick}
			className={clsx(
				styles.button,
				styles[`variant_${variant}`],
				styles[`size_${size}`],
				{
					[styles.disabled]: disabled,
					[styles.loading]: loading,
					[styles.active]: active,
				},
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
