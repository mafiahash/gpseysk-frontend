import styles from './ArrowIcon.module.css'

export default function ArrowIcon({ color = 'green', className = '' }) {
	const isGreen = color === 'green'

	const circleColor = isGreen ? '#052E1C' : '#ffffff'
	const arrowColor = isGreen ? '#ffffff' : '#052E1C'

	return (
		<div className={`${styles.ArrowIcon} ${className}`}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
				<path
					d='M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z'
					fill={circleColor}
				/>
				<path
					d='M31 30C31 30.5523 30.5523 31 30 31C29.4477 31 29 30.5523 29 30V22.4141L20.707 30.707C20.3165 31.0976 19.6835 31.0976 19.293 30.707C18.9024 30.3165 18.9024 29.6835 19.293 29.293L27.5859 21H20C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19H30L30.1025 19.0049C30.6067 19.0562 31 19.4823 31 20V30Z'
					fill={arrowColor}
				/>
			</svg>
		</div>
	)
}
