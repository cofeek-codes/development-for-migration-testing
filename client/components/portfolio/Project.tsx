import Link from 'next/link'
import ContextMenu from '../contextMenu/ContextMenu'
import { useEffect, useState } from 'react'

interface IProject {
	title: string
	description: string
	url: string
}

const Project = (props: IProject) => {
	const [clicked, setIsClicked] = useState<boolean>(false)
	const [points, setPoints] = useState({
		x: 0,
		y: 0,
	})

	useEffect(() => {
		const handleClick = () => setIsClicked(false)
		window.addEventListener('click', handleClick)
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])
	return (
		<div
			className='mb-[25px] relative w-full flex justify-between rounded-[22px] bg-purple p-[20px]'
			onContextMenu={e => {
				e.preventDefault()
				setIsClicked(true)
				setPoints({
					x: e.clientX,
					y: e.clientY,
				})
			}}
		>
			{clicked && <ContextMenu points={points} />}
			<div className='max-w-[835px]'>
				<h2 className='text-[23px] mb-[10px]'>{props.title}</h2>
				<p className='text-[15px]'>{props.description}</p>
			</div>
			<div className='flex items-end'>
				<Link
					className='bg-lightPurple hover:bg-buttonsHover hover:transition-[0.3s] transition-[0.3s] rounded-[22px] py-[10px] px-[35px]'
					href={props.url}
				>
					<span className='text-[15px] font-regular'>Перейти</span>
				</Link>
			</div>
		</div>
	)
}

export default Project
