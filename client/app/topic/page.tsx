'use client'

import Image from 'next/image'
import { useState } from 'react'

import Lection from '@/components/topic/Lection'
import Test from '@/components/topic/Test'
import arrow from '/assets/arrow.png'

const Topic = () => {
	// @TODO: add 3rd tab
	const tabs = [<Lection />, <Test />]
	const [selectedTab, setSelectedTab] = useState<number>(0)
	return (
		<div className='h-screen w-[1080px] mx-auto'>
			<div className='p-[25px]'>
				{/* title */}
				<div className='mb-[25px] flex items-center'>
					<div className='mr-[15px]'>
						<Image src={arrow} width={26} height={32} alt='go back arrow' />
					</div>
					<div className='text-[35px]'>Понятие логарифма</div>
				</div>
				<div className='flex'>
					{/* left */}
					<div className='p-[25px] w-[320px] h-[800px] bg-purple rounded-[22px] mr-[25px]'>
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
