'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Footer.module.css'

export default function Form() {
	const [phone, setPhone] = useState('')
	const [sent, setSent] = useState(false)

	const handlePhoneChange = e => {
		let input = e.target.value.replace(/\D/g, '')

		// Обработка начала ввода
		if (input.startsWith('8')) {
			input = '7' + input.slice(1)
		} else if (input.startsWith('9')) {
			input = '7' + input
		}

		if (input.length > 11) input = input.slice(0, 11)

		let formatted = '+7'
		if (input.length > 1) formatted += ' (' + input.slice(1, 4)
		if (input.length >= 4) formatted += ') ' + input.slice(4, 7)
		if (input.length >= 7) formatted += '-' + input.slice(7, 9)
		if (input.length >= 9) formatted += '-' + input.slice(9, 11)

		setPhone(formatted)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const res = await fetch('/api/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ phone }),
		})

		if (res.ok) {
			setSent(true)
			setPhone('')
		}
	}

	return (
		<form className={styles.filed} onSubmit={handleSubmit}>
			<input
				placeholder='Номер телефона'
				value={phone}
				onChange={handlePhoneChange}
				required
			/>
			<button type='submit'>
				<Image src='/icons/arrow-right.svg' alt='Отправить' fill />
			</button>
			{sent && <p>✅ Отправлено!</p>}
		</form>
	)
}
