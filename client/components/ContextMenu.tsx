'use client'

import axiosInstance from '@/utils/axiosInstance'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
	projectId: number
	resetIndicator: boolean
	setResetIndicator: Dispatch<SetStateAction<boolean>>
	points: { x: number; y: number }
	setModalOpen: Dispatch<SetStateAction<boolean>>
}

const ContextMenu = (props: Props) => {
	const menuRef = useRef<HTMLDivElement>(null)

	function deleteProject(e: any) {
		axiosInstance
			.delete(`/project/deleteProject/${props.projectId}`)
			.then(res => {
				console.log(res.data)
				props.setResetIndicator(!props.resetIndicator)
			})
			.catch(console.log)
	}

	useEffect(() => {
		if (!menuRef.current) return

		const rect = menuRef.current.getBoundingClientRect()
		const screenWidth = window.innerWidth
		const screenHeight = window.innerHeight

		let left = props.points.x
		let top = props.points.y

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
	}, [props.points])

	return (
		<>
			<div
				ref={menuRef}
				className='bg-lightPurple z-30 border-2 overflow-hidden border-[white] flex justify-center items-center flex-col rounded-[22px] w-[165px] h-[100px]'
				style={{
					position: 'fixed',
				}}
			>
				<div
					onClick={e => {
						e.preventDefault()
						props.setModalOpen(true)
					}}
					className='text-[20px] hover:bg-buttonsHover flex items-center h-full w-full border-b-2 border-b-[white] pl-[15px] cursor-pointer'
				>
					Изменить
				</div>
				<div
					onClick={e => {
						e.preventDefault()
						deleteProject(e)
					}}
					className='text-[20px] w-full pl-[15px] h-full hover:bg-buttonsHover flex items-center cursor-pointer'
				>
					Удалить
				</div>
			</div>
		</>
	)
}

export default ContextMenu
