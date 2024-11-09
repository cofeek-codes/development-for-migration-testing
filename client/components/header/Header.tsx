'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '/assets/logo.png'
import exit from '/assets/exit.svg'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Header = () => {
	const router = useRouter()
	function handleLogout(e: any) {
		e.preventDefault()
		Cookies.remove('user_id')
		Cookies.remove('role')
		router.push('/auth')
	}

	return (
		<header className='flex w-full justify-between bg-purple items-center left-0'>
			<div className='header__logo my-[8px] ml-[25px]'>
				<Link href={'/profile'}>
					<Image src={logo} width={102} height={74} alt='logo' />
				</Link>
			</div>
			<div className='flex items-center'>
				<div onClick={handleLogout} className='header__settings mr-[25px]'>
					<Image src={exit} width={47} height={50} alt='exit' />
				</div>
			</div>
		</header>
	)
}

export default Header
