'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import logo from '/assets/logo.png'
import search from '/assets/search.png'
import settings from '/assets/settings.png'

const Header = () => {
	const searchRef = useRef<HTMLInputElement>(null)

	const handleClick = () => {
		searchRef.current!.focus()
	}
	return (
		<header className='flex w-full justify-between bg-purple items-center left-0'>
			<div className='header__logo my-[8px] ml-[25px]'>
				<Link href={'/profile'}>
					<Image src={logo} width={102} height={74} alt='logo' />
				</Link>
			</div>
			<div className='flex items-center'>
				<div className='header__search flex items-center mr-[25px]'>
					<div className='relative'>
						<Image
							className='absolute left-[17px] top-[10%]'
							onClick={handleClick}
							src={search}
							width={45}
							height={45}
							alt='search'
						/>
						<input
							type='text'
							ref={searchRef}
							className='bg-background h-[56px] w-[343px] pl-[70px] pr-[20px] text-[25px] rounded-[30px] text-white'
						/>
					</div>
				</div>
				<div className='header__settings mr-[25px]'>
					<Image src={settings} width={47} height={50} alt='settings' />
				</div>
			</div>
		</header>
	)
}

export default Header
