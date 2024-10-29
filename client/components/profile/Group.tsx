import Image from 'next/image'
import React from 'react'

import avatar from '/assets/avatar.png'

const Group = () => {
	return (
		<div className='flex bg-lightPurple items-center  w-full rounded-[15px] p-[7px] mb-[20px]'>
			{/* logo */}
			<div className='mr-[10px] min-w-[75px] min-h-[75px] h-full flex items-start'>
				<Image
					className='rounded-[15px]'
					src={avatar}
					width={75}
					height={75}
					alt='group avatar'
				/>
			</div>
			{/* title and content */}
			<div>
				<div className='mb-[15px] text-[22px]'>title</div>
				<div className='text-[22px]'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown
				</div>
			</div>
		</div>
	)
}

export default Group
