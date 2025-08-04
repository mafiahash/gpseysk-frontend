import { getGlobalSettings } from '@/entities/site/api/getGlobalSettings'
import { useEffect, useState } from 'react'

export function useHeader() {
	const [phone, setPhone] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		getGlobalSettings().then(data => {
			if (data?.phone) {
				setPhone(data.phone)
			}
		})
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('locked')
		} else {
			document.body.classList.remove('locked')
		}

		return () => {
			document.body.classList.remove('locked')
		}
	}, [isOpen])

	const toggleMenu = () => setIsOpen(prev => !prev)
	const closeMenu = () => setIsOpen(false)

	return {
		phone,
		isOpen,
		toggleMenu,
		closeMenu,
	}
}
