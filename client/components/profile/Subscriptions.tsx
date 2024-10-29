import React from 'react'
import Group from './Group'

const Subscriptions = () => {
	return (
		<>
			{/* title bar */}
			<div className='flex w-full justify-center font-regular mb-[5px] text-[30px]'>
				Мои подписки
			</div>
			<div className='flex flex-col rounded-[22px] px-[25px] py-[25px] justify-start items-start min-start h-[447px] bg-purple overflow-y-auto'>
				<div className='flex justify-center items-center w-full flex-col'>
					<Group />
					<Group />
					<Group />
				</div>
			</div>
		</>
	)
}

export default Subscriptions
