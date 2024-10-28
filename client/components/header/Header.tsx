import Image from 'next/image'
import React from 'react'
import logo from '/assets/logo.png'

const Header = () => {
	return (
		<header className='flex w-full justify-start items-center fixed left-0 top-[10px]'>
			<div>
				<Image src={logo} width={167} height={98} alt='logo' />
			</div>
		</header>
	)
}

export default Header
