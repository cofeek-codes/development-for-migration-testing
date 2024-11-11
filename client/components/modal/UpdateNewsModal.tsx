'use client'

import { IPost } from '@/types/models/IPost'
import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import Modal from './Modal'

interface IUpdateProjectModal {
	isModalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	newsId: number
	update: boolean
	setUpdate: Dispatch<SetStateAction<boolean>>
	news: IPost
}

type FormData = {
	title: string
	content: string
}

const UpdateNewsModal = (props: IUpdateProjectModal) => {
	const [formData, setFormData] = useState<FormData>({} as FormData)
	const [error, setError] = useState<any>(null)
	const [groupOptions, setGroupOptions] = useState<any>(null)

	function updateGroup(e: any) {
		e.preventDefault()
		console.log(formData)
		axiosInstance
			.put(`/admin/updateNews/`, {
				id: props.newsId,
				title: formData.title,
				content: formData.content,
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
						Изменение новости
					</h2>
					<form action='flex flex-col'>
						<label className='text-[25px] ml-2.5' htmlFor='title__input'>
							Заголовок
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, title: e.target.value })
							}}
							defaultValue={props.news.title}
							type='text'
							id='title__input'
							maxLength={120}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>
						<label className='text-[25px] ml-2.5' htmlFor='title__input'>
							Контент
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, content: e.target.value })
							}}
							defaultValue={props.news.content}
							type='text'
							id='title__input'
							maxLength={120}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>
					</form>
				</div>
				<div className='self-end'>
					<button
						onClick={e => {
							updateGroup(e)
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

export default UpdateNewsModal
