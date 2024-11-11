import { IGroup } from '@/types/models/IGroup'
import { ISubject } from '@/types/models/ISubject'
import axiosInstance from '@/utils/axiosInstance'
import { useState } from 'react'
import UpdateSubjectModal from '../modal/UpdateSubjectModal'

type Props = {
	subject: ISubject
	group: IGroup
}

const Subject = (props: Props) => {
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
	const [update, setUpdate] = useState<boolean>(false)
	function deleteSubject(e: any) {
		axiosInstance
			.delete(`/admin/deleteSubject/${props.subject.id}`)
			.then(res => {
				console.log(res.data)
				window.location.reload()
			})
			.catch(console.log)
	}
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>{props.subject.name}</div>
			</div>
			<div>{/* <div>Группа: {props.group.name}</div> */}</div>
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
						deleteSubject(e)
					}}
				>
					Удалить
				</div>
			</div>
			<UpdateSubjectModal
				isModalOpen={isUpdateModalOpen}
				setModalOpen={setIsUpdateModalOpen}
				update={update}
				setUpdate={setUpdate}
				subjectId={props.subject.id}
				subject={props.subject}
			/>
		</div>
	)
}

export default Subject
