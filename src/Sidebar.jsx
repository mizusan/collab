import { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
	const [count, setCount] = useState(0)

	return (
		<div className="sidebar">
			Sidebar
		</div>
	)
}

export default Sidebar