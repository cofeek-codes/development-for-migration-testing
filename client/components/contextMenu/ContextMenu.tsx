'use client'

import React, { useEffect, useRef } from 'react'

type Props = {
	points: { x: number; y: number }
}

const ContextMenu = ({ points }: Props) => {
	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!menuRef.current) return

		const rect = menuRef.current.getBoundingClientRect()
		const screenWidth = window.innerWidth
		const screenHeight = window.innerHeight

		let left = points.x
		let top = points.y

		// Adjust position if menu goes out of bounds
		if (rect.right > screenWidth) {
			left -= rect.width
		}
		if (rect.bottom > screenHeight) {
			top -= rect.height
		}

		// Add offset to bring menu closer to cursor
		left += 10
		top += 10

		menuRef.current.style.left = `${left}px`
		menuRef.current.style.top = `${top}px`
	}, [points])

	return (
		<div
			ref={menuRef}
			className='bg-lightPurple border-2 overflow-hidden border-[white] flex justify-center items-center flex-col rounded-[22px] w-[165px] h-[100px]'
			style={{
				position: 'fixed',
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
