'use client'

import { IGroup } from '@/types/models/IGroup'
import { IUser } from '@/types/models/IUser'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import UpdateUserModal from '../modal/UpdateUserModal'

type Props = {
	user: IUser
	group: IGroup
}

const User = (props: Props) => {
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
	const [update, setUpdate] = useState<boolean>(false)
	function deleteUser(e: any) {
		axiosInstance
			.delete(`/admin/deleteUser/${props.user.id}`)
			.then(res => {
				console.log(res.data)
				window.location.reload()
			})
			.catch(console.log)
	}
	useEffect(() => {
		console.log('props')
		console.log(props)
	}, [])
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>
					{props.user.name} {props.user.surname} {props.user.patronymic}
				</div>
			</div>
			<div>
				{/* <div>Студент: {props.group.id}</div> */}
				{props.user.role_id == 1 ? 'Студент' : 'Преподаватель'}
			</div>
			<div className='flex'>
				<div
					onClick={e => {
						e.preventDefault()
						setIsUpdateModalOpen(true)
					}}
					className='bg-background rounded-[10px] px-[12px] mr-[10px] py-[8px] text-[15px] hover:transition-[0.3s] hover:bg-buttonsHover transition-[0.3s] cursor-pointer'
				>
					Изменить
				</div>
				<div
					onClick={e => {
						e.preventDefault()
						deleteUser(e)
					}}
					className='bg-background rounded-[10px] px-[12px] py-[8px] text-[15px] hover:transition-[0.3s] hover:bg-buttonsHover transition-[0.3s] cursor-pointer'
				>
					Удалить
				</div>
			</div>
			<UpdateUserModal
				isModalOpen={isUpdateModalOpen}
				setModalOpen={setIsUpdateModalOpen}
				update={update}
				setUpdate={setUpdate}
				userId={props.user.id}
				user={props.user}
			/>
		</div>
	)
}

export default User
