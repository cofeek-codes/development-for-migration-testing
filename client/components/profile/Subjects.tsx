import Image from 'next/image'
import arrow from '/assets/arrow.png'

const Subjects = () => {
	return (
		<div className='mb-[25px] w-[319px]'>
			{/* title bar */}
			<div className='flex w-full justify-center font-regular mb-[5px] text-[30px]'>
				Основное
			</div>
			<div className='flex flex-col rounded-[22px] justify-start bg-purple p-[25px] h-[600px] overflow-scroll'>
				{/* subject title  */}
				<div className='flex justify-start items-center w-full mb-[10px]'>
					<div className='mr-[30px]'>
						<Image src={arrow} width={26} height={32} alt='go back arrow' />
					</div>
					<div className='text-[22px]'>ИСиП-401</div>
				</div>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						Математика
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						Математика
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						Математика
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
			</div>
		</div>
	)
}

export default Subjects
