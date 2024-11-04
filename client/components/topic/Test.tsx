import Question from './Question'

const Test = () => {
	return (
		<div className='flex flex-col justify-between h-full'>
			<div>
				<div className='font-bold text-[23px] mb-[15px]'>Тест: Логарифмы</div>
				<Question />
				<Question />
			</div>
			<div className='flex leading-[3px] text-[15px] self-end mt-[25px]'>
				<button className='bg-lightPurple transition-[0.3s] hover:bg-buttonsHover hover:transition-[0.3s] w-[230px] h-[45px] flex justify-center items-center rounded-[22px] mr-[10px]'>
					Результаты прохождения
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

export default Test
