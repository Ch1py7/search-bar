import { Command } from '@bulbsum/search-bar'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { Options } from './utils/options'
import viteLogo from '/vite.svg'

function App() {
	const [count, setCount] = useState(0)
	const [open, setOpen] = useState<boolean>(false)

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event?.key === 'k' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault()
			setOpen((prev) => !prev)
		} else if (event.key === 'Escape') {
			event.preventDefault()
			setOpen(false)
		}
	}

	return (
		<>
			<Command open={open} onKeyDown={handleKeyDown} options={Options} />
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
