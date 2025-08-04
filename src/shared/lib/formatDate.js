// src/utils/formatDate.js
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export function formatDate(dateString) {
	if (!dateString) return ''

	const formatted = format(new Date(dateString), 'd MMMM yyyy', {
		locale: ru,
	})

	// Делаем первую букву каждого слова заглавной
	return formatted.replace(/(^|\s)\S/g, letter => letter.toUpperCase())
}
