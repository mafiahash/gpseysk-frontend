'use client'

import { useRouter } from 'next/navigation'
import styles from './BackButton.module.css' // если хочешь стилизовать

export default function BackButton() {
	const router = useRouter()

	return (
		<button onClick={() => router.back()} className={styles.backButton}>
			← Вернуться назад
		</button>
	)
}
