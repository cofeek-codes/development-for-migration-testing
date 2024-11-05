'use client'

import React, { useEffect } from 'react'

type Props = {
	points: { x: number; y: number }
}

const ContextMenu = (props: Props) => {
	useEffect(() => {
		console.log(props)
	})
	return (
		// @FIXME: fix positioning of ContextMenu
		<div
			className={
				'bg-lightPurple border-2 overflow-hidden  border-[white] flex justify-center items-center flex-col rounded-[22px] w-[165px] h-[100px]'
			}
			style={{
				position: 'absolute',
				left: props.points.x + 'px',
				top: props.points.y + 'px',
			}}
		>
			<div className='text-[20px] hover:bg-buttonsHover flex items-center h-full w-full border-b-2 border-b-[white] pl-[15px]'>
				Изменить
			</div>
			<div className='text-[20px] w-full pl-[15px] h-full hover:bg-buttonsHover flex items-center'>
				Удалить
			</div>
		</div>
	)
}

export default ContextMenu
