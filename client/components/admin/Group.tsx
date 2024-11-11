import { IGroup } from '@/types/models/IGroup'
import axiosInstance from '@/utils/axiosInstance'
import { useState } from 'react'
import UpdateGroupModal from '../modal/UpdateGroupModal'

type Props = {
	group: IGroup
}

const Group = (props: Props) => {
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
	const [update, setUpdate] = useState<boolean>(false)
	function deleteGroup(e: any) {
		axiosInstance
			.delete(`/admin/deleteGroup/${props.group.id}`)
			.then(res => {
				console.log(res.data)
				window.location.reload()
			})
			.catch()
	}
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>{props.group.name}</div>
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
						deleteGroup(e)
					}}
				>
					Удалить
				</div>
			</div>
			<UpdateGroupModal
				isModalOpen={isUpdateModalOpen}
				setModalOpen={setIsUpdateModalOpen}
				update={update}
				setUpdate={setUpdate}
				groupId={props.group.id}
				group={props.group}
			/>
		</div>
	)
}

export default Group
