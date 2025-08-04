import { Header } from '@/widgets/Header'
import '../globals.css'

export const metadata = {
	title: 'Квартира в новостройке от застройщика в Ейске - Гражданпромстрой',
	description: 'Квартиры в новостройках в Ейске напрямую от застройщика.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
