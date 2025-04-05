import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Buildings from './sections/Buildings/Buildings'
import Intro from './sections/Intro/Intro'
import Nav from './sections/Nav/Nav'
import News from './sections/News/News'

export default function Home() {
	return (
		<>
			<Header />
			<Intro />
			<Buildings />
			<Nav />
			<News />
			<Footer />
		</>
	)
}
