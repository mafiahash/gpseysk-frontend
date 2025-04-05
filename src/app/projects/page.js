import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ProjectCard from '@/components/Сards/ProjectCard/ProjectCard'
import styles from './page.module.css'

export default function Projects() {
	return (
		<>
			<Header />
			<div className='wrapper'>
				<h1 className={styles.title}>Новостройки в Ейске</h1>
			</div>
			<div className='wrapper grid space'>
				<ProjectCard title='ЖК на Красной' price='2 000 000' type='default' />

				<ProjectCard title='ЖК на Красной' price='2 000 000' type='big' />

				<ProjectCard title='ЖК на Красной' price='2 000 000' type='default' />

				<ProjectCard title='ЖК на Красной' price='2 000 000' type='bigger' />
			</div>

			<Footer />
		</>
	)
}
