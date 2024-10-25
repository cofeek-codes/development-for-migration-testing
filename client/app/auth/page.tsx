"use client"

import Image from 'next/image'
import Link from 'next/link'
import logo from '/assets/logo.png'
import { useState } from 'react'
import LoginForm from '@/components/auth/LoginForm'
import RegisterForm from '@/components/auth/RegisterForm'

export default function Auth() {
   const [isLogin, seIstLogin] = useState<bool>(false)

   const changeForm = () => {
      setIsLogin(!isLogin)
   }
   return (
      <>
         <header className='flex w-full justify-start items-center fixed left-0 top-[10px]'>
            <div>
               <Image src={logo} width={167} height={98} alt='logo' />
            </div>
         </header>
         <div className='max-w-[700px]'>
            {isLogin ? <LoginForm props={{ changeForm: changeForm }} /> : <RegisterForm props={{ changeForm: changeForm }} />}
         </div>
      </>
   )
}
