import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import avatar from '/assets/avatar.png'
import Link from 'next/link'
import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import Loading from '../Loading'

const Student = () => {
	const [data, setData] = useState<any>(null)
	const [error, setError] = useState<AxiosError | null>(null)
	useEffect(() => {
		// getUser
		axiosInstance
			.get('/user/getUser')
			.then(res => {
				setData(res.data.message[0])
				console.log(res.data.message[0])
			})
			.catch((err: AxiosError) => {
				setError(err)
			})
		// getGroup
		//
		// axiosInstance
		// 	.get('/user/getGroups')
		// 	.then(res => {
		// 		setData(res.data.message[0])
		// 		console.log(res.data.message[0])
		// 	})
		// 	.catch((err: AxiosError) => {
		// 		setError(err)
		// 	})
	}, [])
	return (
		<>
			<div className='mt-[25px] ml-[25px] flex items-center'>
				{/* avatar */}
				<div className='mr-[15px]'>
					<Image
						src={avatar}
						className='rounded-[10px]'
						width={180}
						height={180}
						alt='avatar'
					/>
				</div>
				{/* name and portfolio */}
				<div>
					<div className='text-[27px] mb-[5px]'>
						{!data && 'Загрузка...'}
						{data?.name} {data?.surname} {data?.patronymic}
					</div>
					{/* @TODO: ask how to get group */}
					<div className='text-[30px] mb-[30px]'>ДС-301</div>
					<div className='flex transition-[0.3s] hover:bg-buttonsHover h-[75px] justify-center items-center bg-purple w-[228px] rounded-[22px]'>
						<Link href={'/'} className='w-inherit text-[30px]'>
							Портфолио
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Student
