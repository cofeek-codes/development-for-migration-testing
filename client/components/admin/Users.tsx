'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Select, { StylesConfig } from 'react-select'

import { IGroup } from '@/types/models/IGroup'
import { IUser } from '@/types/models/IUser'
import axiosInstance from '@/utils/axiosInstance'
import CreateUserModal from '../modal/CreateUserModal'
import User from './User'
import search from '/assets/search.png'

const Users = () => {
	const [data, setData] = useState<any>()
	const [groups, setGroups] = useState<IGroup[]>([])
	const [error, setError] = useState<any>()
	const [isModalCreateOpen, setModalCreateOpen] = useState(false)
	const [update, setUpdate] = useState<boolean>(false)
	useEffect(() => {
		// getGroups
		axiosInstance
			.get('/admin/getGroups')
			.then(res => {
				console.log(res.data.message[0])
				setGroups(res.data.message)
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
		// getUsers
		axiosInstance
			.get('/admin/getUsers')
			.then(res => {
				console.log(res.data.message)
				setData(res.data.message)
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
	}, [])
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
				{!data && 'Загрузка...'}
				{!groups && 'Загрузка...'}
				{data &&
					groups &&
					data.map((u: IUser) => (
						<User
							group={groups.find(g => g.id === u.group_id)!}
							key={u.id}
							user={u}
						/>
					))}
			</div>

			<div
				onClick={e => {
					e.preventDefault()
					setModalCreateOpen(true)
				}}
				className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple h-[45px] flex justify-center items-center rounded-[22px] text-[15px] px-[10px] py-[15px]'
			>
				Добавить пользователя
			</div>
			<CreateUserModal
				isModalOpen={isModalCreateOpen}
				setModalOpen={setModalCreateOpen}
				update={update}
				setUpdate={setUpdate}
			/>
		</div>
	)
}

export default Users
