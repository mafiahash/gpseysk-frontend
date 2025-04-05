import Link from '@/components/ui/Link/Link'
import styles from './Buildings.module.css'
export default function Buildings() {
	return (
		<div className={`${styles.Buildings} wrapper space`}>
			<h2>Новостройки в Ейске</h2>
			<Link href='/'>Смотреть все</Link>
		</div>
	)
}
