'use client'

import { IGroup } from '@/types/models/IGroup'
import { ISubject } from '@/types/models/ISubject'
import { IUser } from '@/types/models/IUser'
import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { Bounce, toast } from 'react-toastify'
import Modal from './Modal'

interface IUpdateModal {
	isModalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	subjectId: number
	update: boolean
	setUpdate: Dispatch<SetStateAction<boolean>>
	subject: ISubject
}

type FormData = {
	name: string
	group_id: number
	user_id: number
}

const UpdateSubjectModal = (props: IUpdateModal) => {
	const [formData, setFormData] = useState<FormData>({} as FormData)
	const [error, setError] = useState<any>(null)
	const [groups, setGroups] = useState<any>(null)
	const [users, setUsers] = useState<any>(null)
	const [groupOptions, setGroupOptions] = useState<any>(null)
	const [userOptions, setUserOptions] = useState<any>(null)

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

	const router = useRouter()
	useEffect(() => {
		axiosInstance.get('/admin/getGroups').then(res => {
			console.log(res.data.message)
			setGroups(res.data.message)
			setGroupOptions(
				res.data.message.map((g: IGroup) => ({ value: g.id, label: g.name }))
			)
		})

		axiosInstance.get('/admin/getUsers').then(res => {
			console.log(res.data.message)
			const user = res.data.message.filter((e: IUser) => e.role_id == 2)

			setUsers(user)
			setUserOptions(
				user.map((u: IUser) => ({
					value: u.id,
					label: `${u.name} ${u.surname[0]}. ${u.patronymic[0]}.`,
				}))
			)
		})
	}, [])
	function submitSubject(e: any) {
		e.preventDefault()
		console.log(formData)
		axiosInstance
			.put('/admin/updateSubject', {
				id: props.subjectId,
				name: formData.name,
				group_id: formData.group_id,
				user_id: formData.user_id,
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
			.finally(() => {
				window.location.reload()
			})
		props.setModalOpen(false)
	}
	return (
		<Modal isOpen={props.isModalOpen}>
			<div className='flex flex-col justify-between h-full'>
				<div>
					<h2 className='text-center text-[30px] mb-[15px]'>
						Добавление предмета
					</h2>
					<form action='flex flex-col'>
						<label className='text-[25px] ml-2.5' htmlFor='title__input'>
							Название
						</label>
						<input
							defaultValue={props.subject.name}
							onInput={(e: any) => {
								setFormData({ ...formData, name: e.target.value })
							}}
							type='text'
							id='title__input'
							maxLength={120}
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
							Преподаватель
						</label>
						<Select
							onChange={(e: any) => {
								console.log(e)
								setFormData({ ...formData, user_id: e.value })
							}}
							styles={selectStyles}
							// defaultInputValue={roleOptions[0].label}
							options={userOptions}
						/>
					</form>
				</div>
				<div className='self-end'>
					<button
						onClick={e => {
							submitSubject(e)
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

export default UpdateSubjectModal
