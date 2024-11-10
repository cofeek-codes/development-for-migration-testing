import React from 'react'

const Loading = () => {
	return (
		<div className='w-screen h-screen bg-purple flex justify-center items-center text-white'>
			<div className='lds-roller'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loading
