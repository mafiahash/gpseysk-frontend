export function formatRooms(n) {
	const mod10 = n % 10
	const mod100 = n % 100

	if (mod10 === 1 && mod100 !== 11) return `${n} комната`
	if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100))
		return `${n} комнаты`

	return `${n} комнат`
}
