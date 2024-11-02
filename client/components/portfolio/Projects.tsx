'use client'

import { useState } from 'react'
import Modal from '../modal/Modal'
import Project from './Project'

const Projects = () => {
	const [isModalCreateOpen, setModalCreateOpen] = useState(false)
	return (
		<>
			<div className='mb-[25px] w-full'>
				{/* inner div */}
				<div className='flex w-full justify-between items-center font-regular mb-[20px]'>
					<h2 className='text-[30px] leading-[60px]'>Мои проекты</h2>
					<div className='flex items-center'>
						<button
							className='bg-lightPurple rounded-[22px] py-[14px] px-[35px]'
							onClick={() => setModalCreateOpen(true)}
						>
							<span className='text-[20px] font-regular'>Добавить</span>
						</button>
					</div>
				</div>
				<div>
					<Project
						title='Математика'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum ex fugiat quis dolorem, aliquid distinctio reprehenderit vero doloremque et.'
						url='http://localhost/#'
					/>
				</div>
			</div>
			<Modal isOpen={isModalCreateOpen}>
				<div className='flex flex-col justify-between h-full'>
					<div>
						<h2 className='text-center text-[30px] mb-[15px]'>
							Добавление проекта
						</h2>
						<form action='flex flex-col'>
							<label className='text-[25px] ml-2.5' htmlFor='title__input'>
								Название проекта
							</label>
							<input
								type='text'
								id='title__input'
								maxLength={120}
								className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
								required
							/>

							<label
								className='text-[25px] ml-2.5'
								htmlFor='descroption__input'
							>
								Описание проекта
							</label>
							<input
								type='text'
								id='descroption__input'
								maxLength={500}
								className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
								required
							/>
							<label
								className='text-[25px] ml-2.5'
								htmlFor='description__input'
							>
								Ссылка на проект
							</label>
							<input
								type='text'
								id='description__input'
								maxLength={300}
								className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
								required
							/>
						</form>
					</div>
					<div className='self-end'>
						<button className='bg-lightPurple rounded-[22px] py-[14px] px-[35px] mr-[15px]'>
							<span className='text-[20px] font-regular'>Сохранить</span>
						</button>
						<button
							className='bg-lightPurple rounded-[22px] py-[14px] px-[35px]'
							onClick={() => setModalCreateOpen(false)}
						>
							<span className='text-[20px] font-regular'>Отменить</span>
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default Projects
