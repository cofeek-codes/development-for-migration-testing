'use client'

import { useState } from 'react'
import CreateModal from '../modal/projectsmodal/CreateModal'
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
							className='bg-lightPurple rounded-[22px] py-[14px] px-[35px] hover:bg-purple hover:transition-[0.3s] transition-[0.3s]'
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
			<CreateModal
				isModalOpen={isModalCreateOpen}
				setModalOpen={setModalCreateOpen}
			/>
		</>
	)
}

export default Projects
