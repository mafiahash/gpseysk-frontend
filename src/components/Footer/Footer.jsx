import Image from 'next/image'
import NextLink from 'next/link'
import styles from './Footer.module.css'
import Form from './Form'
export default function Footer() {
	return (
		<div style={{ backgroundColor: '#052E1C' }}>
			<div className={`${styles.Footer} wrapper`}>
				<div className={styles.links}>
					<NextLink href='/'>Новостройки</NextLink>
					<NextLink href='/'>Аренда офисов</NextLink>
					<NextLink href='/'>Дома</NextLink>
					<NextLink href='/'>О нас</NextLink>
				</div>
				<div className={styles.form}>
					<h4>Оставить заявку для связи</h4>
					<Form />
					<small className={'smaller'}>
						Нажимая «Отправить», вы соглашаетесь на 
						<NextLink href='/'>обработку персональных данных.</NextLink>
					</small>
				</div>
				<div className={styles.logo}>
					<Image src='/logo-footer.svg' alt='ГРАЖДАНПРОМСТРОЙ' fill />
				</div>
			</div>
		</div>
	)
}
