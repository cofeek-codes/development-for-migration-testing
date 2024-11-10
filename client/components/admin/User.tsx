'use client'

import { IGroup } from '@/types/models/IGroup'
import { IUser } from '@/types/models/IUser'
import React, { useEffect } from 'react'

type Props = {
	user: IUser
	group: IGroup
}

const User = (props: Props) => {
	useEffect(() => {
		console.log('props')
		console.log(props)
	}, [])
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>
					{props.user.name} {props.user.surname} {props.user.patronymic}
				</div>
			</div>
			<div>
				<div>Студент: {props.group.name}</div>
			</div>
			<div className='flex'>
				<div className='bg-background rounded-[10px] px-[12px] mr-[10px] py-[8px] text-[15px]'>
					Изменить
				</div>
				<div className='bg-background rounded-[10px] px-[12px] py-[8px] text-[15px]'>
					Удалить
				</div>
			</div>
		</div>
	)
}

export default User
