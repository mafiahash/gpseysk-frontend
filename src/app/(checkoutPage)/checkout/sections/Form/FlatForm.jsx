'use client'

import { useSearchParams } from 'next/navigation'

import Button from '@/shared/ui/Button/Button'
import Input from '@/shared/ui/Input/Input'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Form.module.css'
export default function FlatForm() {
	const [phone, setPhone] = useState('')
	const [sent, setSent] = useState(false)
	const searchParams = useSearchParams()

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

		await fetch('/api/checkout', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: `${e.target.name.value}`,
				surname: `${e.target.surname.value}`,
				phone: `${phone}`,
				paymentType: `${searchParams.get('paymentType')}`,
				objectType: `${searchParams.get('type')}`,
				object: `${searchParams.get('object')}`,
			}),
		})

		setSent(true)
		setPhone('')
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Заявка на покупку квартиры</h1>
			<div className={styles.inputs}>
				<Input
					className={styles.Input}
					placeholder='Имя'
					type='name'
					name='name'
					required
				/>
				<Input
					className={styles.Input}
					placeholder='Фамилия'
					type='surname'
					name='surname'
					required
				/>
				<Input
					className={styles.Input}
					placeholder='Телефон'
					type='phone'
					name='phone'
					required
					value={phone}
					onChange={handlePhoneChange}
				/>
			</div>
			<Button variant='primary' className={styles.Button}>
				Отправить
			</Button>
			<small>
				Нажимая «Отправить», вы соглашаетесь на обработку{' '}
				<Link href={'/doc'}>персональных данных</Link>.
			</small>
		</form>
	)
}
