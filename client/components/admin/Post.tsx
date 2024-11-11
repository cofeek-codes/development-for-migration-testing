import { IPost } from '@/types/models/IPost'
import axiosInstance from '@/utils/axiosInstance'
import { useState } from 'react'
import UpdateNewsModal from '../modal/UpdateNewsModal'

type Props = {
	post: IPost
}

const Post = (props: Props) => {
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
	const [update, setUpdate] = useState<boolean>(false)
	function deleteNews(e: any) {
		axiosInstance
			.delete(`/admin/deleteNews/${props.post.id}`)
			.then(res => {
				console.log(res.data)
				window.location.reload()
			})
			.catch()
	}
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>{props.post.title}</div>
			</div>
			<div className='flex'>
				<div
					className='bg-background rounded-[10px] px-[12px] mr-[10px] py-[8px] text-[15px] hover:transition-[0.3s] hover:bg-buttonsHover transition-[0.3s] cursor-pointer'
					onClick={e => {
						e.preventDefault()
						setIsUpdateModalOpen(true)
					}}
				>
					Изменить
				</div>
				<div
					className='bg-background rounded-[10px] px-[12px] py-[8px] text-[15px] hover:transition-[0.3s] hover:bg-buttonsHover transition-[0.3s] cursor-pointer'
					onClick={e => {
						e.preventDefault()
						deleteNews(e)
					}}
				>
					Удалить
				</div>
			</div>
			<UpdateNewsModal
				isModalOpen={isUpdateModalOpen}
				setModalOpen={setIsUpdateModalOpen}
				update={update}
				setUpdate={setUpdate}
				newsId={props.post.id}
				news={props.post}
			/>
		</div>
	)
}

export default Post
