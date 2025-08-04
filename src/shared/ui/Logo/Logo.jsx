import Image from 'next/image'

export const Logo = ({ variant = 'dark', className = '' }) => {
	const src = variant === 'light' ? '/logo-light.svg' : '/logo-dark.svg'

	return <Image src={src} alt='Логотип' fill className={className} priority />
}
