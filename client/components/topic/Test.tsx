import React from 'react'
import Question from './Question'

const Test = () => {
	return (
		<div>
			{/* title */}
			<div className='font-bold text-[23px] mb-[15px]'>Тест: Логарифмы</div>
			{/* question 1 */}
			<Question />
			<Question />
			<div className='absolute right-[25px] bottom-[25px] bg-lightPurple w-[131px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
				Отправить
			</div>
		</div>
	)
}

export default Test
