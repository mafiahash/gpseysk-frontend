'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './FullscreenImage.module.css'

export default function FullscreenImage({ src, alt = '', className = '' }) {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => setIsOpen(!isOpen)

	return (
		<>
			<div
				onClick={handleToggle}
				className={`${styles.thumbnail} ${className} rounded`}
			>
				<Image src={src} alt={alt} fill />
			</div>

			{isOpen && (
				<div onClick={handleToggle} className={styles.overlay}>
					<div className={styles.fullscreenWrapper}>
						<Image
							src={src}
							alt={alt}
							fill
							className={styles.fullscreenImage}
						/>
					</div>
				</div>
			)}
		</>
	)
}
