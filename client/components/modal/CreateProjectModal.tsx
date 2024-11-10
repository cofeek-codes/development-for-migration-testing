'use client'

import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import Modal from './Modal'
interface ICreateModal {
	isModalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	update: boolean
	setUpdate: Dispatch<SetStateAction<boolean>>
}

type FormData = {
	title: string
	description: string
	url: string
}

const CreateProjectModal = (props: ICreateModal) => {
	const [formData, setFormData] = useState<FormData>({} as FormData)
	const [error, setError] = useState<any>(null)
	const router = useRouter()
	function submitProject(e: any) {
		e.preventDefault()
		axiosInstance
			.post('/project/addProject', {
				title: formData.title,
				description: formData.description,
				url: formData.url,
				user_id: Cookies.get('user_id'),
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
					router.refresh()
				}
				// window.location.reload()
			})
			.catch((err: AxiosError) => {
				console.log(err)
			})
		props.setModalOpen(false)
	}
	return (
		<Modal isOpen={props.isModalOpen}>
			<div className='flex flex-col justify-between h-full'>
				<div>
					<h2 className='text-center text-[30px] mb-[15px]'>
						Добавление проекта
					</h2>
					<form action='flex flex-col'>
						<label className='text-[25px] ml-2.5' htmlFor='title__input'>
							Название проекта
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, title: e.target.value })
							}}
							type='text'
							id='title__input'
							maxLength={120}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>

						<label className='text-[25px] ml-2.5' htmlFor='descroption__input'>
							Описание проекта
						</label>
						<input
							onInput={(e: any) => {
								setFormData({ ...formData, description: e.target.value })
							}}
							type='text'
							id='descroption__input'
							maxLength={500}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>
						<label className='text-[25px] ml-2.5' htmlFor='description__input'>
							Ссылка на проект
						</label>
						<input
							onInput={(e: FormEvent<HTMLInputElement>) => {
								if (!e.currentTarget.value.includes('http')) {
									setFormData({
										...formData,
										url: 'https://' + e.currentTarget.value,
									})
								} else {
									setFormData({ ...formData, url: e.currentTarget.value })
								}
							}}
							type='text'
							id='description__input'
							maxLength={300}
							className='h-[60px] w-full text-[25px] px-[15px] py-[10px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black'
							required
						/>
					</form>
				</div>
				<div className='self-end'>
					<button
						onClick={e => {
							submitProject(e)
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

export default CreateProjectModal
