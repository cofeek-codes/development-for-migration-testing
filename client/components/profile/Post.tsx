import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import arrowRight from '/assets/arrow-right.png'

const Post = () => {
	return (
		<div className='w-full flex flex-col'>
			{/* title */}
			<div className='mb-[15px] text-[23px]'>Математика</div>
			{/* content */}
			<div className='flex flex-wrap max-w-[636px] h-full'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown
			</div>
			<div className='mt-[10px] w-full flex justify-end'>
				<Link className='bg-lightPurple rounded-[22px] p-[10px]' href={'/'}>
					<span className='mr-[5px] font-regular'>Читать далее</span>
					<span>
						<Image
							className='inline'
							src={arrowRight}
							width={14}
							height={14}
							alt='arrow'
						/>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default Post
