'use client'
import axiosInstance from '@/utils/axiosInstance'
import { AxiosError } from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface IAnswersData {
	mark: {
		id: number
		mark: string
		date: string
		test_id: number
		user_id: number
		time: string
		created_at: any
		updated_at: any
	}
	user: {
		id: number
		name: string
		surname: string
		patronymic: string
	}
}

interface IProps {
	test_id: number
	SetStudentAnswersOpen: Dispatch<SetStateAction<boolean>>
}

const StudentsAnswers = (props: IProps) => {
	const [testTitle, setTestTitle] = useState<string>('')
	const [answersData, setAnswersData] = useState<IAnswersData[] | null>(null)
	const [error, setError] = useState<AxiosError | null>(null)
	useEffect(() => {
		// getTest
		axiosInstance
			.get(`/topic/getTest/${props.test_id}`)
			.then(res => {
				setTestTitle(res.data.message.test.title)
			})
			.catch(err => {
				setError(err)
			})

		axiosInstance
			.get(`/topic/getMarks/${props.test_id}`)
			.then(res => {
				setAnswersData(res.data.message)
			})
			.catch(err => {
				setError(err)
			})
	}, [])

	return (
		<div className='flex flex-col justify-between h-full'>
			<div>
				<div className='font-bold text-[23px] mb-[15px] w-full bg-purple outline-none'>
					{testTitle ? testTitle : 'Загрузка...'}
				</div>
				<div className='text-wrap h-[630px]'>
					{!answersData
						? 'Загрузка...'
						: answersData.map((el: IAnswersData) => (
								<div
									key={el.user.id}
									className='resize-none flex justify-center items-center px-[15px] bg-lightPurple w-full p-[] h-[55px] outline-none overflow-y-auto rounded-[12px]'
								>
									<div className='w-full bg-lightPurple'>
										<div className='flex justify-between items-center'>
											<div className='text-[18px]'>
												{el.user.surname} {el.user.name[0]}.{' '}
												{el.user.patronymic[0]}.
											</div>
											<div className='text-[15px]'>
												Продолжительность: <b>{el.mark.time}</b>
											</div>
											<div className='text-[15px]'>
												Оценка: <b>{el.mark.mark}</b>
											</div>
										</div>
									</div>
								</div>
						  ))}
				</div>
			</div>
			<div className='flex leading-[3px] text-[15px] self-end mt-[25px]'>
				<button
					className=' bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[130px] h-[45px] flex justify-center items-center rounded-[22px]'
					onClick={() => props.SetStudentAnswersOpen(false)}
				>
					К тесту
				</button>
			</div>
		</div>
	)
}

export default StudentsAnswers
