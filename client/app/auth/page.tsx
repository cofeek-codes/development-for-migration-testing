'use client'

import { useState } from 'react'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'

export default function Auth() {
	const [isLogin, setIsLogin] = useState<boolean>(true)

	const changeForm = () => {
		setIsLogin(!isLogin)
	}
	return (
		<>
			<div className='max-w-[700px]'>
				{isLogin ? (
					<LoginForm changeForm={changeForm} />
				) : (
					<RegisterForm changeForm={changeForm} />
				)}
			</div>
		</>
	)
}
