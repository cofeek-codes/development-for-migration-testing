'use client'

import Image from 'next/image'
import React, { ReactNode, useState } from 'react'

import arrow from '/assets/arrow.png'
import Lection from '@/components/topic/Lection'
import Test from '@/components/topic/Test'
import { useRouter } from 'next/navigation'

const Topic = () => {
	const router = useRouter()
	const tabs = [
		<Lection title='lection 1' isTest={false} lectionId={1} />,
		<Lection title='lection 2' isTest={false} lectionId={2} />,
		<Test title='test 1' isTest={true} testId={1} />,
		<Test title='test 2' isTest={true} testId={2} />,
	]

	const [selectedTab, setSelectedTab] = useState<number>(0)
	return (
		<div className='h-screen w-[1080px] mx-auto'>
			<div className='p-[25px]'>
				{/* title */}
				<div className='mb-[25px] flex items-center'>
					<div
						onClick={e => {
							e.preventDefault()
							router.back()
						}}
						className='mr-[15px]'
					>
						<Image src={arrow} width={26} height={32} alt='go back arrow' />
					</div>
					<div className='text-[35px]'>Понятие логарифма</div>
				</div>
				<div className='flex items-center'>
					{/* left */}
					<div className='p-[25px] w-[320px] h-[600px] bg-purple rounded-[22px] mr-[25px]'>
						<div className='*:mb-[2px] last:mb-0'>
							{tabs.map((tab: React.JSX.Element, idx: number) => (
								<div className='hover:bg-buttonsHover rounded-[10px] transition-[0.3s]'>
									<button
										className='p-[10px] text-left text-[15px] w-full'
										onClick={e => {
											e.preventDefault()
											setSelectedTab(idx)
										}}
									>
										{!tab.props.isTest
											? tab.props.title
											: 'Тест: ' + tab.props.title}
									</button>
								</div>
							))}
						</div>
					</div>

					{/* right */}
					<div className='w-[685px] relative p-[25px]  h-[600px] bg-purple rounded-[22px]'>
						{tabs[selectedTab]}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Topic
