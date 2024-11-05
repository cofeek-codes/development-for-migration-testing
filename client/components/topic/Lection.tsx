const Lection = () => {
	return (
		<div className='flex flex-col justify-between h-full'>
			<div>
				<input
					className='font-bold text-[23px] mb-[15px] w-full bg-purple outline-none'
					defaultValue={'Понятие логарифма'}
					placeholder='Введите название лекции'
				/>
				<div className='text-wrap h-[630px]'>
					<textarea
						className='resize-none bg-purple w-full h-full outline-none overflow-y-auto'
						placeholder='Введите лекцию'
						defaultValue={`Определение: Логарифмом положительного числа b  по положительному и не равному единице основанию a называется показатель степени, в который надо возвести число a, чтобы получить b. Логарифмы были придуманы для ускорения и упрощения вычислений.   Идея логарифма,  т. е. идея выражать числа в виде степени одного и того же основания, принадлежит Михаилу Штифелю.     Но во времена Штифеля математика была не столь развита и идея логарифма не нашла своего развития.      Логарифмы были изобретены позже одновременно и независимо друг от друга шотландским учёным Джоном Непером (1550-1617) и швейцарцем Иобстом Бюрги (1552-1632).   

Слово «логарифм»  происходит от греческих слов logoz и ariumoz - оно означает буквально “числа отношений”. Впервые понятие логарифма   ввел математик  Джон Непер, о чем сообщалось в публикации 1614 года, когда была опубликована работа Непера под названием «Описание удивительной таблицы логарифмов»`}
					/>
				</div>
			</div>
			<div className='flex leading-[3px] text-[15px] self-end mt-[25px]'>
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

export default Lection
