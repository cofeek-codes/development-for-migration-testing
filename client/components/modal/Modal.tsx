import React from 'react'

interface IModal {
	children: React.ReactNode
	isOpen: boolean
}

const Modal = (props: IModal) => {
	if (!props.isOpen) {
		return null
	}
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-purple p-[25px] rounded-[22px] shadow-lg w-[600px] overflow-y-auto h-[600px]'>
				{props.children}
			</div>
		</div>
	)
}

export default Modal
