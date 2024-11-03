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
				<Link
					href={'/portfolio'}
					className='flex h-[75px] justify-center items-center bg-purple hover:bg-buttonsHover hover:transition-[0.3s] transition-[0.3s] w-[228px] rounded-[22px] text-[30px]'
				>
					<span className=''>Портфолио</span>
				</Link>
			</div>
		</div>
	)
}

export default Teacher
