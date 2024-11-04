'use client'

import Image from 'next/image'
import { useState } from 'react'

import Lection from '@/components/topic/Lection'
import TestEditor from '@/components/topic/TestEditor'
import Link from 'next/link'
import arrow from '/assets/arrow.png'

const Topic = () => {
	const [isAddOpen, setAddOpen] = useState(false)
	const tabs = [<Lection />, <TestEditor />]
	const [selectedTab, setSelectedTab] = useState<number>(0)
	return (
		<div className='h-screen w-[1080px] mx-auto'>
			<div className='p-[25px]'>
				{/* title */}
				<div className='mb-[25px] flex items-center'>
					<div className='mr-[15px]'>
						<Link href={'/profile'}>
							<Image src={arrow} width={26} height={32} alt='go back arrow' />
						</Link>
					</div>
					<div className='text-[35px]'>Понятие логарифма</div>
				</div>
				<div className='flex'>
					{/* left */}
					<div className='flex flex-col relative mr-[25px]'>
						<div className='p-[25px] w-[320px] h-[725px] bg-purple rounded-[22px_22px_0px_0px]'>
							<div className='*:mb-[5px] last:mb-0'>
								<div>
									<button
										onClick={e => {
											e.preventDefault()
											setSelectedTab(0)
										}}
									>
										1. Понятие логарифма
									</button>
								</div>
								<div>
									<button
										onClick={e => {
											e.preventDefault()
											setSelectedTab(1)
										}}
									>
										2. Тест: Логарирфмы
									</button>
								</div>
								<div>
									<button>3. Домашнее задание</button>
								</div>
							</div>
						</div>
						{isAddOpen ? (
							<div className='flex justify-between items-center bg-background absolute w-full h-[50px] text-[15px] left-0 bottom-[75px]'>
								<div className='h-full flex items-center justify-center w-full transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] cursor-pointer'>
									Лекция
								</div>
								<span className='border-l-[2px] border-solid border-t-white h-full'></span>
								<div className='flex items-center justify-center h-full w-full transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] cursor-pointer'>
									Тест
								</div>
							</div>
						) : (
							''
						)}
						<div
							className='flex justify-center items-center cursor-pointer w-full bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] h-[75px] rounded-[0px_0px_22px_22px] text-[25px]'
							onClick={() => setAddOpen(!isAddOpen)}
						>
							Добавить
						</div>
					</div>
					{/* right */}
					<div className='w-[685px] relative p-[25px] h-[800px] bg-purple rounded-[22px]'>
						{tabs[selectedTab]}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Topic
