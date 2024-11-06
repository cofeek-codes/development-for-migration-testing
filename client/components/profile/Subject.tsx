import React from 'react'
import arrow from '/assets/arrow.png'
import Image from 'next/image'

const Subject = () => {
	return (
		<div className='mb-[25px] w-[319px]'>
			{/* title bar */}
			<div className='flex w-full justify-center font-regular mb-[5px] text-[30px]'>
				Основное
			</div>
			<div className='flex flex-col rounded-[22px] justify-start items-center bg-purple p-[25px] min-h-[447px]'>
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
				<div className='flex justity-start w-full flex-col mt-[10px]'>
					<div>
						<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
							Тема 1
						</p>
						<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
					</div>
					<div>
						<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
							Тема 2
						</p>
						<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subject
