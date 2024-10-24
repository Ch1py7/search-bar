export const handleKeyDown = (
	setSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
): ((event: KeyboardEvent) => void) => {
	if (setOpen) {
		return (event: KeyboardEvent) => {
			if (event?.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((prev) => !prev)
			} else if (event.key === 'Escape') {
				event.preventDefault()
				setOpen(false)
			}
		}
	}
	return (event: KeyboardEvent) => {
		if (event?.key === 'k' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault()
			setSearchBarOpen((prev) => !prev)
		} else if (event.key === 'Escape') {
			event.preventDefault()
			setSearchBarOpen(false)
		}
	}
}
