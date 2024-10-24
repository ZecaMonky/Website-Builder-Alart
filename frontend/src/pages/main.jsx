import React from 'react'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

function Main() {
	return (
		<>
			<Header />
			<main>
				<section className='text-center mt-[166px] mb-[50px]'>
					<h1 className='font-Robot text-[64px] leading-[1.2]'>
						Воплощайте свои идеи
						<br /> в
						<span className='bg-black text-white px-2'>веб-реальность</span> с
						<br /> легкостью и стилем!
					</h1>
					<p className='my-5'>
						Создавайте потрясающие сайты без необходимости программировать. Наш
						интуитивно понятный
						<br /> интерфейс и мощные инструменты помогут вам создать
						профессиональный веб-сайт всего за несколько
						<br /> шагов. Независимо от вашего уровня опыта, с Alart вы сможете
						создать сайт, который идеально отражает
						<br /> вашу уникальность и потребности. Начните сегодня и превратите
						свои идеи в успешный онлайн-проект!
					</p>
					<Button text='Перейти в конструктор' />
				</section>
			</main>
			<Footer p='absolute' />
		</>
	)
}

export default Main
