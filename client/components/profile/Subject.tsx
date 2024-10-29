import React from 'react'
import arrow from '/assets/arrow.png'
import Image from 'next/image'

const Subject = () => {
	return (
		<div className='mb-[25px]'>
			{/* title bar */}
			<div className='flex w-full justify-center font-regular mb-[5px] text-[30px]'>
				Основное
			</div>
			<div className='flex flex-col rounded-[22px] justify-start items-center bg-purple pt-[25px] min-h-[447px] pl-[25px]'>
				{/* subject title  */}
				<div className='flex justify-start items-center w-full'>
					<div className='mr-[30px]'>
						<Image src={arrow} width={26} height={32} alt='go back arrow' />
					</div>
					<div className='text-[22px]'>Математика</div>
				</div>
				{/* teacher info */}
				<div className='mt-[13px] flex justify-start w-full flex-col'>
					<div>Преподаватель: Иванов И.И.</div>
					<div>Кабинет: Иванов И.И.</div>
				</div>
				{/* themes */}
				<div className='flex justity-start w-full flex-col'>
					<ul>
						<li className='list-disc'>
							<a href=''>Тема 1</a>
						</li>
						<li className='list-disc'>
							<a href=''>Тема 2</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Subject
