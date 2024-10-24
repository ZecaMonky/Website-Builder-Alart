import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/button'

export default function Header() {
	return (
		<header className='flex items-center mt-2 pb-2 w-full border-b-zinc-950 border-b-2 '>
			<div className='flex items-center'>
				<h1 className='ml-3 font-Orbitron font-bold text-[40px]'>AMD</h1>
				<div className=' w-px h-7 ml-2 bg-black h'></div>
				<h2 className=' ml-2 font-Orbitron text-[32px]'>
					Alart Website Builder
				</h2>
			</div>
			<div className='text-center flex mx-auto'>
				<nav className='text-center gap-[30px] font-Robot text-xl flex mx-auto cursor-pointer'>
					<Link to='/' className=' hover:underline'>
						Главная
					</Link>
					<Link to='/' className=' hover:underline'>
						Конструктор
					</Link>
					<Link to='/Templates' className=' hover:underline'>
						Шаблоны
					</Link>
					<Link to='/About' className=' hover:underline'>
						О конструкторе
					</Link>
				</nav>
			</div>
			<div className='flex ml-auto font-Robot text-base  '>
				<Link to='/Auth'>
					<Button text='Войти' href='/register' />
				</Link>
				<Link to='/Register'>
					<Button text='Зарегистрироваться' mx='mx-[15px]' />
				</Link>
			</div>
		</header>
	)
}
