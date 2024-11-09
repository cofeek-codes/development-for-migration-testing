import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useStopwatch, useTimer } from 'react-timer-hook'
import { ITest } from '@/types/models/ITest'
import { AxiosError } from 'axios'
import axiosInstance from '@/utils/axiosInstance'
import { IQuestion } from '@/types/models/IQuestion'

type Props = {
	test: ITest
	isTest: boolean
}
const Test = (props: Props) => {
	const [testData, setTestData] = useState<any>(null)
	const [error, setError] = useState<AxiosError | null>(null)

	useEffect(() => {
		axiosInstance
			.get(`/topic/getTest/${props.test.id}`)
			.then(res => {
				setTestData(res.data.message)
				console.log(res.data.message)
			})
			.catch(err => {
				setError(err)
			})
	}, [])

	const { seconds, minutes } = useStopwatch({ autoStart: true })
	return (
		<div>
			{/* title */}
			<div className='font-bold text-[23px] mb-[15px]'>{props.test.title}</div>
			{/* question 1 */}
			{testData?.questions?.map((q: IQuestion) => (
				<Question key={q.id} question={q} />
			))}
			<div className='absolute left-[25px] bottom-[25px] flex justify-center items-center rounded-[22px] text-[23px] font-bold'>
				<span>{minutes}:</span>
				<span>{seconds}</span>
			</div>
			<div className=' transition-[0.3s] hover:bg-buttonsHover absolute right-[25px] bottom-[25px] bg-lightPurple w-[130px] leading-[15px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Отправить
			</div>
		</div>
	)
}

export default Test
