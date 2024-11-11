'use client'

import { IGroup } from '@/types/models/IGroup'
import { IUser } from '@/types/models/IUser'
import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { Bounce, toast } from 'react-toastify'
import Modal from './Modal'

interface IUpdateProjectModal {
	isModalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	userId: number
	update: boolean
	setUpdate: Dispatch<SetStateAction<boolean>>
	user: IUser
}

type FormData = {
	name: string
	surname: string
	patronymic: string
	login: string
	password: string
	group_id: number
	role_id: number
}

const UpdateUserModal = (props: IUpdateProjectModal) => {
	const [formData, setFormData] = useState<FormData>({} as FormData)
	const [projectData, setProjectData] = useState<any>()
	const [error, setError] = useState<any>(null)
	const [groups, setGroups] = useState<any>(null)
	const [groupOptions, setGroupOptions] = useState<any>(null)
	const roleOptions = [
		{ value: 1, label: 'Студент' },
		{ value: 2, label: 'Преподаватель' },
	]
	const router = useRouter()

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

	useEffect(() => {
		axiosInstance.get(`/admin/getGroups`).then(res => {
			setGroups(res.data.message)

			setGroupOptions(
				res.data.message.map((g: IGroup) => ({ value: g.id, label: g.name }))
			)
		})
	}, [props.update])
	function updateUser(e: any) {
		e.preventDefault()
		console.log(formData)
		axiosInstance
			.put(`/admin/updateUser/`, {
				id: props.userId,
				name: formData.name,
				surname: formData.surname,
				patronymic: formData.patronymic,
				login: formData.login,
				password: formData.password,
				group_id: formData.group_id,
				role_id: formData.role_id,
			})
			.then(res => {
				props.setUpdate(!props.update)
				if (res.data.code != 200) {
					setError(res)
					toast.error(res.data.message, {
						position: 'bottom-center',
						autoClose: 5000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
						transition: Bounce,
					})
				} else {
					console.log(res)
				}
				props.setModalOpen(false)
			})
			.catch((err: AxiosError) => {
				console.log(err)
			})
		props.setModalOpen(false)
		window.location.reload()
	}
	return (
		<Modal isOpen={props.isModalOpen}>
			<div className='flex flex-col justify-between h-full'>
				<div>
					<h2 className='text-center text-[30px] mb-[15px]'>
						Изменение пользователя
					</h2>
					<form action='flex flex-col'>
						<label className='text-[25px] ml-2.5' htmlFor='title__input'>
							Имя
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, name: e.target.value })
							}}
							defaultValue={props.user.name}
							type='text'
							id='title__input'
							maxLength={120}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Фамилия
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, surname: e.target.value })
							}}
							defaultValue={props.user.surname}
							type='text'
							id='descroption__input'
							maxLength={500}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Отчетсво
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, patronymic: e.target.value })
							}}
							defaultValue={props.user.patronymic}
							type='text'
							id='descroption__input'
							maxLength={500}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Логин
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, login: e.target.value })
							}}
							defaultValue={props.user.login}
							type='text'
							id='descroption__input'
							maxLength={500}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Пароль
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, password: e.target.value })
							}}
							type='password'
							id='descroption__input'
							maxLength={500}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Группа
						</label>
						<Select
							onChange={(e: any) => {
								console.log(e)
								setFormData({ ...formData, group_id: e.value })
							}}
							styles={selectStyles}
							// defaultValue={groupOptions[0]}
							options={groupOptions}
						/>
						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Роль
						</label>
						<Select
							onChange={(e: any) => {
								console.log(e)
								setFormData({ ...formData, role_id: e.value })
							}}
							styles={selectStyles}
							options={roleOptions}
						/>
					</form>
				</div>
				<div className='self-end my-[25px] pb-[25px]'>
					<button
						onClick={e => {
							updateUser(e)
						}}
						className='bg-lightPurple rounded-[22px] py-[14px] px-[35px] mr-[15px] hover:bg-buttonsHover hover:transition-[0.3s] transition-[0.3s]'
					>
						<span className='text-[20px] font-regular'>Сохранить</span>
					</button>
					<button
						className='bg-lightPurple rounded-[22px] py-[14px] px-[35px] hover:bg-buttonsHover hover:transition-[0.3s] transition-[0.3s]'
						onClick={() => props.setModalOpen(false)}
					>
						<span className='text-[20px] font-regular'>Отменить</span>
					</button>
				</div>
			</div>
		</Modal>
	)
}

export default UpdateUserModal
