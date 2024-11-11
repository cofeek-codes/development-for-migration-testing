'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import Select, { StylesConfig } from 'react-select'

import search from '/assets/search.png'
import User from './User'
import Subject from './Subject'

const Subjects = () => {
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
	const options = [{ value: 'isip-401', label: 'ИСиП-401' }]
	const searchRef = useRef<HTMLInputElement>(null)
	return (
		<div>
			{/* title div */}
			<div className='font-bold text-[23px] mb-[15px] flex justify-between items-center'>
				<div>
					<div>Учебные предметы</div>
				</div>
				<div className='flex'>
					<div className='mr-[15px] bg-background w-[180px] px-[7px] py-[3px] rounded-[10px]'>
						{/* react select here */}
						<Select
							options={options}
							defaultValue={options[0]}
							styles={selectStyles}
						/>
					</div>

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
			{/* @TODO: discuss <pre> */}
			<div>
				<Subject />
				<Subject />
				<Subject />
			</div>

			<div className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple w-[130px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Добавить предмет
			</div>
		</div>
	)
}

export default Subjects
