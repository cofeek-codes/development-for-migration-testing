import Image from 'next/image'
import React from 'react'
import avatar from '/assets/avatar.png'
import Link from 'next/link'

const Student = () => {
	return (
		<div className='mt-[25px] ml-[25px] flex items-center'>
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
			<div>
				<div className='text-[27px] mb-[5px]'>Иванов Иван Иванович</div>
				<div className='text-[30px] mb-[30px]'>ДС-301</div>
				<div className='flex h-[75px] justify-center items-center bg-purple w-[228px] rounded-[22px]'>
					<Link href={'/'} className='w-inherit text-[30px]'>
						Портфолио
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Student
