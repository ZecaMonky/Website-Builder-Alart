import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import SearchBar from '../components/serchBar/searchBar'

function Templates() {
	return (
		<>
			<Header />
			<main>
				<div className='border-[2px] border-black mt-[23px] mx-9'>
					<h1 className='font-Robot text-[40px] text-center mt-[31px] font-bold'>
						Шаблоны
					</h1>
					<div className=''>
						<SearchBar />
						<p className='font-Orbitron text-center text-base mb-[22px]'>
							Наши HTML-шаблоны для веб-сайтов предлагают идеальные решения для
							любых
							<br /> проектов. Все шаблоны полностью отзывчивы и легко
							настраиваются с помощью
							<br /> простого Drag-n-Drop конструктора сайтов Alart. Создавайте
							уникальные и<br /> профессиональные сайты за считанные минуты, без
							необходимости
							<br /> программирования!
						</p>
					</div>
				</div>
				<div>
					<h1 className='font-Robot text-[32px] text-center mt-[31px] font-bold mb-5'>
						Категории html шаблонов
					</h1>
					<div className='flex mx-auto w-[1780px] mb-7'>
						<img src='./img/Group 1270.svg' />
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Templates
