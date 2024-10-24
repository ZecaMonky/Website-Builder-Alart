import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/main.css'
import About from './pages/about'
import Auth from './pages/auth'
import Main from './pages/main'
import Register from './pages/register'
import Templates from './pages/templates'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/Auth' element={<Auth />} />
				<Route path='/Register' element={<Register />} />
				<Route path='/Templates' element={<Templates />} />
				<Route path='/About' element={<About />} />
			</Routes>
		</>
	)
}

export default App
