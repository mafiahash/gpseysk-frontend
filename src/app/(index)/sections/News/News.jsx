import Link from '@/components/ui/Link/Link'
import News from '@/components/ui/News/News'
import styles from './News.module.css'
export default function IntroNews() {
	return (
		<>
			<div className={`${styles.News} wrapper`}>
				<h2>Новости</h2>
				<Link href='/'>Смотреть все</Link>
			</div>
			<div className='wrapper grid space'>
				<News
					header='Строящийся дом по ул. Армавирская, 37/1'
					description='В первом подъезде завершаются работы по кладке четвертого этажа'
					date='01.02.2025'
				/>

				<News
					header='Строящийся дом по ул. Армавирская, 37/1'
					description='В первом подъезде завершаются работы по кладке четвертого этажа'
					date='01.02.2025'
				/>

				<News
					header='Строящийся дом по ул. Армавирская, 37/1'
					description='В первом подъезде завершаются работы по кладке четвертого этажа'
					date='01.02.2025'
				/>

				<News
					header='Строящийся дом по ул. Армавирская, 37/1'
					description='В первом подъезде завершаются работы по кладке четвертого этажа'
					date='01.02.2025'
				/>
			</div>
		</>
	)
}
