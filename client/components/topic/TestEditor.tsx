'use client'

import cancel from '@/assets/cancel.svg'
import Image from 'next/image'
import { useState } from 'react'

interface IQuestion {
	id: number
	title: string
	answers: {
		id: number
		title: string
		isCorrect: boolean
	}[]
}

const TestEditor = () => {
	const [questions, setQuestions] = useState<IQuestion[]>([
		{
			id: 1,
			title: '',
			answers: [
				{
					id: 1,
					title: '',
					isCorrect: true,
				},
			],
		},
	])
	return (
		<div className='flex flex-col justify-between h-full'>
			<div>
				<input
					className='font-bold text-[23px] mb-[15px] w-full bg-purple outline-none'
					defaultValue={'Тест: Логарифмы'}
					placeholder='Введите название теста'
				/>
				<div className='flex flex-col h-[630px] w-full overflow-y-auto'>
					{questions.map((question, index) => {
						return (
							<div className='mb-[20px] mr-[10px]' key={question.id}>
								<div className='mb-[15px]'>
									<div className='flex mb-[10px] justify-between'>
										<p className='text-[20] '>Вопрос {index + 1}</p>
										<Image
											src={cancel}
											height={25}
											width={25}
											alt='delete'
											className='cursor-pointer'
											onClick={() => {
												questions.length > 1
													? setQuestions(
															questions.filter(x => x.id != question.id)
													  )
													: ''
											}}
										/>
									</div>
									<input
										type='text'
										className='bg-background w-full text-[18] h-[40px] px-[10px] rounded-[10px] outline-none'
										placeholder='Введите вопрос'
										onChange={input => {
											const items: IQuestion[] = questions.map((item: any) =>
												item.id === question.id
													? { ...item, title: input.currentTarget.value }
													: item
											)
											setQuestions(items)
										}}
									/>
								</div>
								{question.answers.map((answer, index) => {
									return (
										<div className='mb-[15px]' key={answer.id}>
											<div className='flex items-center justify-between'>
												<div className='flex items-center'>
													<p className='text-[20] mr-[15px]'>
														Ответ {index + 1}:
													</p>
													<input
														type='text'
														className='text-[15px] h-[35px] w-[470px] px-[10px] rounded-[10px] outline-none bg-background'
														placeholder='Введите ответ'
														onChange={input => {
															const items = question.answers.map((item: any) =>
																item.id === answer.id
																	? {
																			...item,
																			title: input.currentTarget.value,
																	  }
																	: item
															)

															const questionAnswers = questions.map(
																(itemq: any) =>
																	itemq.id === question.id
																		? {
																				...itemq,
																				answers: items,
																		  }
																		: itemq
															)

															setQuestions(questionAnswers)
														}}
													/>
												</div>
												<label className='mb-[20px] container w-[25px]  flex justify-center items-center h-full'>
													<input
														type='radio'
														name={'question_' + question.id}
														defaultChecked={index === 0}
														onChange={() => {
															const items = question.answers.map((item: any) =>
																item.id === answer.id
																	? {
																			...item,
																			isCorrect: true,
																	  }
																	: {
																			...item,
																			isCorrect: false,
																	  }
															)

															const questionAnswers = questions.map(
																(itemq: any) =>
																	itemq.id === question.id
																		? {
																				...itemq,
																				answers: items,
																		  }
																		: itemq
															)
															setQuestions(questionAnswers)
														}}
													/>
													<span className='checkmark'></span>
												</label>

												<Image
													src={cancel}
													height={30}
													width={30}
													alt='delete'
													className='cursor-pointer'
													onClick={() => {
														question.answers.length > 1 &&
														answer.isCorrect == false
															? setQuestions(
																	questions.map(item =>
																		item.id == question.id
																			? {
																					...item,
																					answers: item.answers.filter(
																						x => x.id != answer.id
																					),
																			  }
																			: item
																	)
															  )
															: ''
													}}
												/>
											</div>
										</div>
									)
								})}
								<div>
									{question.answers.length < 6 ? (
										<button
											className='text-[15px] bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[160px] h-[40px] flex justify-center items-center rounded-[22px]'
											onClick={() => {
												setQuestions(
													questions.map(item =>
														item.id == question.id
															? {
																	...item,
																	answer: item.answers.push({
																		id: item.answers.length + 1,
																		title: '',
																		isCorrect: false,
																	}),
															  }
															: item
													)
												)
											}}
										>
											Добавить ответ
										</button>
									) : (
										''
									)}
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className='flex leading-[3px] text-[15px] self-end mt-[25px]'>
				<button
					className='bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[180px] h-[45px] flex justify-center items-center rounded-[22px] mr-[10px]'
					onClick={() => {
						setQuestions([
							...questions,
							{
								id: questions.length + 1,
								title: '',
								answers: [
									{
										id: 1,
										title: '',
										isCorrect: true,
									},
								],
							},
						])
					}}
				>
					Добавить вопрос
				</button>
				<button
					className='bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[130px] h-[45px] flex justify-center items-center rounded-[22px] mr-[10px]'
					onClick={() => console.log(questions)}
				>
					Сохранить
				</button>
			</div>
		</div>
	)
}

export default TestEditor
