import Image from 'next/image'
import styles from './Footer.module.css'
import { Links } from './Links/Links'
import { RequestForm } from './RequestForm/RequestForm'

export function Footer() {
	return (
		<div style={{ backgroundColor: '#052E1C' }}>
			<div className={`${styles.footer} wrapper`}>
				<Links />
				<RequestForm />
				<div className={styles.logo}>
					<Image src='/logo-footer.svg' alt='ГРАЖДАНПРОМСТРОЙ' fill />
				</div>
			</div>
		</div>
	)
}
