'use client'

import { IPost } from '@/types/models/IPost'
import axiosInstance from '@/utils/axiosInstance'
import { useEffect, useState } from 'react'
import CreateNewsModal from '../modal/CreateNewsModal'
import Post from './Post'

const News = () => {
	const [data, setData] = useState<any>()
	const [error, setError] = useState<any>()
	const [isModalCreateOpen, setModalCreateOpen] = useState(false)
	const [update, setUpdate] = useState<boolean>(false)
	useEffect(() => {
		// getNews
		axiosInstance
			.get('/admin/getNews')
			.then(res => {
				console.log(res.data.message[0])
				setData(res.data.message)
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
	}, [])
	return (
		<div>
			{/* title div */}
			<div className='font-bold text-[23px] mb-[15px] flex justify-between items-center'>
				<div>
					<div>Новости</div>
				</div>
			</div>
			{/* content */}
			<div>
				{!data && 'Загрузка...'}
				{data && data.map((p: IPost) => <Post key={p.id} post={p} />)}
			</div>

			<div
				className='transition-[0.3s] hover:bg-buttonsHover absolute leading-[3px] right-[25px] bottom-[25px] bg-lightPurple w-[160px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px] cursor-pointer'
				onClick={e => {
					e.preventDefault()
					setModalCreateOpen(true)
				}}
			>
				Добавить новость
			</div>
			<CreateNewsModal
				isModalOpen={isModalCreateOpen}
				setModalOpen={setModalCreateOpen}
				update={update}
				setUpdate={setUpdate}
			/>
		</div>
	)
}

export default News
