export function formatPrice(value) {
	if (typeof value !== 'string') value = String(value ?? '')
	const number = value.replace(/\s/g, '').replace(/[^\d]/g, '')
	return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
