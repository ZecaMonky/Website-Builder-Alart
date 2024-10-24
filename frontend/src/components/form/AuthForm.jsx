import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AuthForm() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Обработка данных формы
		console.log(formData)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='w-[500px] h-[470px] mx-auto p-6 bg-white shadow-md'
		>
			<div className='flex justify-end mb-4'>
				<Link to='/auth' className='text-black mr-4'>
					ВХОД
				</Link>
				<Link to='/register' className='text-black'>
					РЕГИСТРАЦИЯ
				</Link>
			</div>
			<h2 className='text-2xl font-bold mb-4'>Авторизация</h2>

			<div className='mb-4'>
				<label className='block mb-2 text-black'>E-mail</label>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className='w-full p-2 border border-gray-300 rounded bg-gray-100 text-black'
					required
				/>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 text-black'>Пароль</label>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					className='w-full p-2 border border-gray-300 rounded bg-gray-100 text-black'
					required
				/>
			</div>

			<Link to='/'>
				<button
					type='submit'
					className='w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 border border-gray-300 transition duration-300 mb-4'
				>
					Войти
				</button>
			</Link>

			<div className='flex items-center my-4'>
				<hr className='flex-grow border-t border-gray-400' />
				<span className='mx-4 text-black'>или</span>
				<hr className='flex-grow border-t border-gray-400' />
			</div>

			<button
				type='button'
				className='w-full bg-white text-black p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300'
			>
				Продолжить с Google
			</button>
		</form>
	)
}

export default AuthForm
