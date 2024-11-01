import React from 'react'

const Question = () => {
	return (
		<div className='mb-[15px]'>
			{/* question content */}
			<div className='text-[18px] mb-[10px]'>Вопрос 1: Что такое логарифм?</div>
			{/* answers wrapper */}
			<div className='flex flex-wrap'>
				<label className='container'>
					прпопорпрпорорпорпорппоро
					<input type='checkbox' checked={true} />
					<span className='checkmark'></span>
				</label>

				<label className='container'>
					Чудно
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>

				<label className='container'>
					Чудно апрпарарар
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>

				<label className='container'>
					Чудно
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
			</div>
		</div>
	)
}

export default Question
