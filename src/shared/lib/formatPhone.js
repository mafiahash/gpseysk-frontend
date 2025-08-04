export function formatPhone(e, setPhone) {
	let input = e.target.value.replace(/\D/g, '')

	if (input.startsWith('8')) {
		input = '7' + input.slice(1)
	} else if (input.startsWith('9')) {
		input = '7' + input
	}

	if (input.length > 11) input = input.slice(0, 11)

	let formatted = '+7'
	if (input.length > 1) formatted += ' (' + input.slice(1, 4)
	if (input.length >= 4) formatted += ') ' + input.slice(4, 7)
	if (input.length >= 7) formatted += '-' + input.slice(7, 9)
	if (input.length >= 9) formatted += '-' + input.slice(9, 11)

	setPhone(formatted)
}
