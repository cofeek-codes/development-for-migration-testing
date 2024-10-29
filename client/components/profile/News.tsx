import React from 'react'
import Post from './Post'

const News = () => {
	return (
		<div className='mb-[25px]'>
			{/* inner div */}
			<div className='flex w-full justify-center font-regular text-[30px] mb-[5px]'>
				Новости
			</div>
			{/* @TODO: fix scroller styles */}
			<div className='flex flex-col rounded-[22px] px-[25px] py-[25px] justify-start items-start min-start h-[447px] bg-purple overflow-y-auto'>
				{/* news */}
				<div className='w-full'>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	)
}

export default News
