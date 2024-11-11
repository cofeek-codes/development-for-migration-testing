'use client'

import { useEffect, useState } from 'react'

import { IGroup } from '@/types/models/IGroup'
import axiosInstance from '@/utils/axiosInstance'
import CreateGroupModal from '../modal/CreateGroupModal'
import Group from './Group'

const Groups = () => {
	const [data, setData] = useState<any>()
	const [error, setError] = useState<any>()
	const [isModalCreateOpen, setModalCreateOpen] = useState(false)
	const [update, setUpdate] = useState<boolean>(false)
	useEffect(() => {
		// getGroups
		axiosInstance
			.get('/admin/getGroups')
			.then(res => {
				console.log(res.data.message[0])
				setData(res.data.message)
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
	}, [])

	// const searchRef = useRef<HTMLInputElement>(null)
	return (
		<div>
			{/* title div */}
			<div className='font-bold text-[23px] mb-[15px] flex justify-between items-center'>
				<div>
					<div>Группы</div>
				</div>
				<div className='flex'>
					{/* <div className='flex items-center bg-background w-[180px] px-[7px] py-[3px] rounded-[10px]'>
						<div>
							<Image
								src={search}
								onClick={() => {
									searchRef.current!.focus()
								}}
								width={25}
								height={25}
								alt='search icon'
							/>
						</div>
						<div className='w-full ml-[6px]'>
							<input
								ref={searchRef}
								type='text'
								placeholder='Поиск'
								className='w-full bg-background text-[17px] font-regular focus:outline-none'
							/>
						</div>
					</div> */}
				</div>
			</div>
			{/* content */}
			<div>
				{!data && 'Загрузка...'}
				{data && data.map((g: IGroup) => <Group key={g.id} group={g} />)}
			</div>

			<div
				className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple w-[150px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px] hover:transition-[0.3s] cursor-pointer'
				onClick={e => {
					e.preventDefault()
					setModalCreateOpen(true)
				}}
			>
				Добавить группу
			</div>

			<CreateGroupModal
				isModalOpen={isModalCreateOpen}
				setModalOpen={setModalCreateOpen}
				update={update}
				setUpdate={setUpdate}
			/>
		</div>
	)
}

export default Groups
