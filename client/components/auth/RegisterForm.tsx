'use client'
import '@/app/globals.scss'
import { useState } from 'react'

type Props = {
	// @TODO: replace with correct type definition of function
	changeForm: any
}

const RegisterForm = (props: Props) => {
	const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)

	function showPassword() {
		console.log('eye pressed')
		setIsPasswordShown(!isPasswordShown)
	}

	return (
		<>
			<div className='font-regular text-[80px] w-full flex justify-center items-center'>
				Регистрация
			</div>
			<form action=''>
				<div className='flex'>
					<div className='c-left-column w-[50%] mr-[30px]'>
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
								className='w-full h-full bg-inherit'
							/>
							<div
								// @FIXME: fix eye_shown icon
								className={
									!isPasswordShown ? 'c-password-eye' : 'c-password-eye_shown'
								}
								onClick={showPassword}
							></div>
						</div>
						<label className='text-3xl ml-2.5' htmlFor='password__input'>
							Кто ты?
						</label>
						<div className='c-select flex justify-center items-center h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] mb-[20px] rounded-[10px] text-black bg-white appearance-none'>
							<select className='appearance-none w-full h-full bg-inherit'>
								<option value='student'>Студент</option>
								<option value='teacher'>Преподаватель</option>
							</select>
						</div>
					</div>
					<div className='c-right-column w-[50%]'>
						<label className='text-3xl ml-2.5' htmlFor='name__input'>
							Имя
						</label>
						<input
							type='text'
							className='h-[90px] w-full text-3xl px-[30px] py-[26px] my-[10px] rounded-[10px] mb-[20px] text-black bg-white'
						/>
						<label className='text-3xl ml-2.5' htmlFor='surname__input'>
							Фамилия
						</label>
						<input
							type='text'
							className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] rounded-[10px] mb-[20px] text-black bg-white'
						/>
						<label className='text-3xl ml-2.5' htmlFor='surname__input'>
							Отчество
						</label>
						<input
							type='text'
							className='h-[90px] w-full text-3xl px-[30px] py-[26px] mt-[10px] rounded-[10px] mb-[20px] text-black bg-white'
						/>
					</div>
				</div>
				<div className='text-right mx-0 my-[30px]'>
					<button className='text-[25px]' onClick={() => props.changeForm()}>
						Вход
					</button>
				</div>
				<button className='h-20 w-full text-3xl bg-lightPurple rounded-[10px] transition-[0.5s] hover:transition-[0.5s] hover:brightness-[90%] active:brightness-[70%]'>
					Зарегистрироваться
				</button>
			</form>
		</>
	)
}

export default RegisterForm
