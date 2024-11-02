import Image from 'next/image'
import Link from 'next/link'
import avatar from '/assets/avatar.png'

const Teacher = () => {
	return (
		<div className='mt-[25px] ml-[25px] flex'>
			{/* avatar */}
			<div className='mr-[15px]'>
				<Image
					src={avatar}
					className='rounded-[10px]'
					width={180}
					height={180}
					alt='avatar'
				/>
			</div>
			{/* name and portfolio */}
			<div className='flex flex-col justify-center'>
				<div className='text-[27px] mb-[5px]'>Иванов Иван Иванович</div>
				<div className='flex h-[75px] justify-center items-center bg-purple w-[228px] rounded-[22px]'>
					<Link href={'/portfolio'} className='w-inherit text-[30px]'>
						Портфолио
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Teacher
