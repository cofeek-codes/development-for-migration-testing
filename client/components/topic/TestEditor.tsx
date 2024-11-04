import cancel from '@/assets/cancel.svg'
import Image from 'next/image'

const TestEditor = () => {
	return (
		<div className='flex flex-col justify-between h-full'>
			<div>
				<input
					className='font-bold text-[23px] mb-[15px] w-full bg-purple outline-none'
					defaultValue={'Тест: Логарифмы'}
					placeholder='Введите название теста'
				/>
				<div className='flex flex-col h-[630px] w-full overflow-y-auto'>
					<div className='mb-[20px]'>
						<div className='mb-[15px]'>
							<p className='text-[20] mb-[10px]'>Вопрос 1</p>
							<input
								type='text'
								className='bg-background w-full text-[18] h-[40px] px-[10px] rounded-[10px] outline-none'
								placeholder='Введите вопрос'
							/>
						</div>
						<div className='mb-[15px]'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<p className='text-[20] mr-[15px]'>Ответ 1:</p>
									<input
										type='text'
										className='text-[15px] h-[35px] w-[480px] px-[10px] rounded-[10px] outline-none bg-background'
										placeholder='Введите ответ'
									/>
								</div>
								<label className='mb-[20px] container w-[25px]  flex justify-center items-center h-full'>
									<input type='radio' />
									<span className='checkmark'></span>
								</label>

								<Image
									src={cancel}
									height={30}
									width={30}
									alt='delete'
									className='cursor-pointer'
								/>
							</div>
						</div>
						<div className='mb-[15px]'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<p className='text-[20] mr-[15px]'>Ответ 2:</p>
									<input
										type='text'
										className='text-[15px] h-[35px] w-[480px] px-[10px] rounded-[10px] outline-none bg-background'
										placeholder='Введите ответ'
									/>
								</div>
								<label className='mb-[20px] container w-[25px]  flex justify-center items-center h-full'>
									<input type='radio' />
									<span className='checkmark'></span>
								</label>

								<Image
									src={cancel}
									height={30}
									width={30}
									alt='delete'
									className='cursor-pointer'
								/>
							</div>
						</div>
						<div>
							<button className='text-[15px] bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[160px] h-[40px] flex justify-center items-center rounded-[22px]'>
								Добавить ответ
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='flex leading-[3px] text-[15px] self-end mt-[25px]'>
				<button className='bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[180px] h-[45px] flex justify-center items-center rounded-[22px] mr-[10px]'>
					Добавить вопрос
				</button>
				<button className='bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[130px] h-[45px] flex justify-center items-center rounded-[22px] mr-[10px]'>
					Сохранить
				</button>
				<button className=' bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[130px] h-[45px] flex justify-center items-center rounded-[22px]'>
					Удалить
				</button>
			</div>
		</div>
	)
}

export default TestEditor
