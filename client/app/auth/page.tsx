'use client'

import { useState } from 'react'
import LoginForm from '@/components/auth/LoginForm'

export default function Auth() {
	return (
		<>
			<div className='max-w-[700px]'>
				<LoginForm />
			</div>
		</>
	)
}
