'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import Select, { StylesConfig } from 'react-select'

import search from '/assets/search.png'
import User from './User'
import Group from './Group'

const Groups = () => {
	const selectStyles: StylesConfig = {
		control: styles => ({
			...styles,
			backgroundColor: '#0a0019',
			border: 'none',
			fontSize: '15px',
		}),

		container: styles => ({
			...styles,
			backgroundColor: '#0a0019',
			border: 'none',
		}),

		option: styles => ({
			...styles,
			backgroundColor: '#0a0019',
			border: 'none',
		}),

		menu: styles => ({
			...styles,
			backgroundColor: '#0a0019',
			border: 'none',
			fontSize: '15px',
		}),

		placeholder: styles => ({
			...styles,
			fontSize: '15px',
		}),
	}
	const options = [
		{ value: 'teacher', label: 'Преподаватель' },
		{ value: 'student', label: 'Студент' },
	]
	const searchRef = useRef<HTMLInputElement>(null)
	return (
		<div>
			{/* title div */}
			<div className='font-bold text-[23px] mb-[15px] flex justify-between items-center'>
				<div>
					<div>Группы</div>
				</div>
				<div className='flex'>
					<div className='flex items-center bg-background w-[180px] px-[7px] py-[3px] rounded-[10px]'>
						<div>
							<Image
								src={search}
								onClick={() => {
									searchRef.current!.focus()
								}}
								width={25}
								height={25}
								alt='search icon'
							/>
						</div>
						<div className='w-full ml-[6px]'>
							<input
								ref={searchRef}
								type='text'
								placeholder='Поиск'
								className='w-full bg-background text-[17px] font-regular focus:outline-none'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* content */}
			<div>
				<Group />
				<Group />
				<Group />
			</div>

			<div className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple w-[130px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Добавить группу
			</div>
		</div>
	)
}

export default Groups
