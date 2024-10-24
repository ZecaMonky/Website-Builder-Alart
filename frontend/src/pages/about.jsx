import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

function About() {
	return (
		<>
			<Header />
			<main>
				<h1 className='mt-[52px]  text-[40px] font-bold text-center font-Robot'>
					О нас
				</h1>
				<p className='pt-20 font-Robot text-[20px] text-center '>
					Alart Website Builder - это инновационный инструмент, который поможет
					<br />
					вам легко и быстро создать свой собственный профессиональный сайт.
					<br />
					Наша платформа предоставляет широкий выбор функций и инструментов
					<br /> для дизайна, адаптивного дизайна и оптимизации SEO, что
					позволяет вам
					<br />
					создать уникальный и удобный сайт без специальных знаний в области
					<br />
					веб-разработки.
				</p>
				<p className='pt-20 font-Robot text-[20px] text-center '>
					Мы стремимся предоставить нашим пользователям интуитивно понятный
					<br />
					интерфейс, быструю работу и надежную поддержку, чтобы обеспечить
					легкость
					<br /> и удовольствие от создания собственного сайта. Наша команда
					специалистов
					<br /> постоянно работает над улучшением и обновлением нашего
					продукта, чтобы
					<br /> предоставить вам самые передовые инструменты для создания
					виртуального
					<br /> присутствия вашего бизнеса.
				</p>
			</main>
			<Footer p='absolute' />
		</>
	)
}

export default About
