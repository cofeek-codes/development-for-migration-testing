import React, { Dispatch, SetStateAction } from 'react'
import Modal from './Modal'

interface IUpdateUserModal {
	isModalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
}

const UpdateUserModal = (props: IUpdateUserModal) => {
	return (
		<Modal isOpen={props.isModalOpen}>
			<form action='flex flex-col'>
				<label className='text-3xl ml-2.5' htmlFor='email__input'>
					Имя
				</label>
				<input
					type='text'
					className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black placeholder:text-black'
					placeholder='Имя'
				/>

				<label className='text-3xl ml-2.5' htmlFor='email__input'>
					Фамилия
				</label>
				<input
					type='text'
					className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black placeholder:text-black'
					placeholder='Фамилия'
				/>

				<label className='text-3xl ml-2.5' htmlFor='email__input'>
					Отчество
				</label>
				<input
					type='text'
					className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black placeholder:text-black'
					placeholder='Отчество'
				/>

				<label className='text-3xl ml-2.5' htmlFor='password__input'>
					Пароль
				</label>
				<div className='c-password h-[90px] w-full text-3xl pr-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] text-black bg-white'>
					<input
						type='text'
						className='w-full h-[90px] rounded-[10px] pl-[30px] bg-inherit'
					/>
				</div>
				<button className='h-20 mt-[40px] w-full text-3xl bg-lightPurple rounded-[10px] transition-[0.5s] hover:transition-[0.5s] hover:brightness-[90%] active:brightness-[70%]'>
					Вход
				</button>
			</form>
		</Modal>
	)
}

export default UpdateUserModal
