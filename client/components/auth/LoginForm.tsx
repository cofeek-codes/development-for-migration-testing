'use client'

import { useState } from 'react'

type Props = {
	// @TODO: replace with correct type definition of function
	changeForm: any
}

const LoginForm = (props: Props) => {
	const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

	function showPassword() {
		setIsPasswordShown(!isPasswordShown)
	}
	return (
		<>
			<div className='font-regular text-[80px] w-full flex justify-center items-center'>
				Авторизация
			</div>
			<form action='flex flex-col'>
				<label className='text-3xl ml-2.5' htmlFor='email__input'>
					Email
				</label>
				<input
					type='email'
					className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] bg-white text-black placeholder:text-black'
					placeholder='example@example.com'
				/>
				<label className='text-3xl ml-2.5' htmlFor='password__input'>
					Пароль
				</label>
				<div className='c-password h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] text-black bg-white'>
					<input
						type={!isPasswordShown ? 'password' : 'text'}
						className='w-full h-[90px] bg-inherit'
					/>
					<div
						className={
							!isPasswordShown ? 'c-password-eye' : 'c-password-eye_shown'
						}
						onClick={showPassword}
					></div>
				</div>
				<div className='text-right mx-0 my-[30px]'>
					<button
						className='text-[25px]'
						onClick={e => {
							e.preventDefault()
							props.changeForm()
						}}
					>
						Регистрация
					</button>
				</div>
				<button className='h-20 w-full text-3xl bg-lightPurple rounded-[10px] transition-[0.5s] hover:transition-[0.5s] hover:brightness-[90%] active:brightness-[70%]'>
					Вход
				</button>
			</form>
		</>
	)
}

export default LoginForm
