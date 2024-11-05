import React from 'react'
import Question from './Question'
import { useTimer } from 'react-timer-hook'

const Test = () => {
	const expiryTimestamp = new Date()
	expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600)
	const {
		totalSeconds,
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn('onExpire called'),
	})
	return (
		<div>
			{/* title */}
			<div className='font-bold text-[23px] mb-[15px]'>Тест: Логарифмы</div>
			{/* question 1 */}
			<Question />
			<Question />
			<div className='absolute left-[25px] bottom-[25px] flex justify-center items-center rounded-[22px] text-[23px] font-bold'>
				<span>{minutes}:</span>
				<span>{seconds}</span>
			</div>
			<div className='absolute right-[25px] bottom-[25px] bg-lightPurple w-[130px] leading-[15px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Отправить
			</div>
		</div>
	)
}

export default Test
