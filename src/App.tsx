import { useEffect, useRef, useState } from 'react'
import { Command } from './components/Command'
import { Options } from './utils/options'

export const App: React.FC = (): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [value, setValue] = useState<string>('')
	const [data, setData] = useState<{ id: number; name: string; description: string }[] | null>(null)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setValue(value)
	}

	const filteredData = value
		? data?.filter((d) => d.name.toLowerCase().includes(value))
		: (data ?? [])

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event?.key === 'k' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault()
			setOpen((prev) => !prev)
		} else if (event.key === 'Escape') {
			event.preventDefault()
			setOpen(false)
		}
	}

  useEffect(() => {
    setData(Options)
  }, [])

	useEffect(() => {
		if (open && inputRef.current) {
			inputRef.current.focus()
		}
	}, [open])

	return (
		<Command
			open={open}
			inputRef={inputRef}
			value={value}
			onChange={onChange}
			options={filteredData}
			onKeyDown={handleKeyDown}
		/>
	)
}
