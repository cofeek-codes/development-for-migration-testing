'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import Select, { StylesConfig } from 'react-select'

import search from '/assets/search.png'

const Users = () => {
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
					<div>Пользователи</div>
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
				Определение: Логарифмом положительного числа b  по положительному и не
				равному единице основанию a называется показатель степени, в который
				надо возвести число a, чтобы получить b. Логарифмы были придуманы для
				ускорения и упрощения вычислений.   Идея логарифма,  т. е. идея выражать
				числа в виде степени одного и того же основания, принадлежит Михаилу
				Штифелю.     Но во времена Штифеля математика была не столь развита и
				идея логарифма не нашла своего развития.      Логарифмы были изобретены
				позже одновременно и независимо друг от друга шотландским учёным Джоном
				Непером (1550-1617) и швейцарцем Иобстом Бюрги (1552-1632).        Слово
				«логарифм»  происходит от греческих слов logoz и ariumoz - оно означает
				буквально “числа отношений”. Впервые понятие логарифма  ввел английский
				математик  Джон Непер, о чем сообщалось в публикации 1614 года, когда
				была опубликована работа Непера под названием «Описание удивительной
				таблицы логарифмов».
			</div>
			<div className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple w-[130px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Далее
			</div>
		</div>
	)
}

export default Users
