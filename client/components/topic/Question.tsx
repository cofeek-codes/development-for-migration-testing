import { IAnswer } from '@/types/models/IAnswer'
import { IQuestion } from '@/types/models/IQuestion'
import React from 'react'

type Props = {
	question: IQuestion
}

const Question = (props: Props) => {
	return (
		<div className='mb-[15px]'>
			{/* question content */}
			<div className='text-[18px] mb-[10px]'>{props.question.title}</div>
			{/* @TODO: fix radio buttons according to template */}
			{/* answers wrapper */}
			<div className='flex flex-wrap'>
				{props.question.answers.map((a: IAnswer, idx: number) => (
					<label key={a.id} className='container'>
						{a.title}
						<input type='checkbox' defaultChecked={idx === 1} />
						<span className='checkmark'></span>
					</label>
				))}
			</div>
		</div>
	)
}

export default Question
