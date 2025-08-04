'use client'
import { formatPhone } from '@/shared/lib/formatPhone'
import { useState } from 'react'
import styles from './RequestForm.module.css'

import NextLink from 'next/link'
export function RequestForm() {
	const [phone, setPhone] = useState('')
	const [sent, setSent] = useState(false)
	return (
		<form className={`${styles.form}`} action=''>
			<h4>Оставить заявку для связи</h4>
			<div className={styles.field}>
				<input
					placeholder='Номер телефона'
					value={phone}
					onChange={e => formatPhone(e, setPhone)}
					required
				/>
				<button type='submit'>→</button>
			</div>
			<small className={'smaller'}>
				Нажимая «Отправить», вы соглашаетесь на 
				<NextLink href='/privacy' className='smaller'>
					обработку персональных данных.
				</NextLink>
			</small>
		</form>
	)
}
