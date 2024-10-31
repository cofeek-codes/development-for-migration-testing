import Image from 'next/image'
import React from 'react'

import arrow from '/assets/arrow.png'

const Topic = () => {
	return (
		<div className='h-screen w-[1080px] mx-auto'>
			<div className='p-[25px]'>
				{/* title */}
				<div className='mb-[25px] flex items-center'>
					<div className='mr-[15px]'>
						<Image src={arrow} width={26} height={32} alt='go back arrow' />
					</div>
					<div className='text[35px]'>Понятие логарифма</div>
				</div>
				<div className='flex items-center'>
					{/* left */}
					<div className='p-[25px] w-[320px] h-[600px] bg-purple rounded-[22px] mr-[25px]'>
						<div className='*:mb-[5px] last:mb-0'>
							<div>
								<button>1. Понятие логарифма</button>
							</div>
							<div>
								<button>2. Тест: Логарирфмы</button>
							</div>
							<div>
								<button>3. Домашнее задание</button>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='w-[685px] relative p-[25px]  h-[600px] bg-purple rounded-[22px]'>
						<div>
							{/* title */}
							<div className='font-bold text-[23px] mb-[15px]'>
								Понятие логарифма
							</div>
							{/* content */}
							{/* @TODO: discuss <pre> */}
							<div>
								Определение: Логарифмом положительного числа b  по
								положительному и не равному единице основанию a называется
								показатель степени, в который надо возвести число a, чтобы
								получить b. Логарифмы были придуманы для ускорения и упрощения
								вычислений.   Идея логарифма,  т. е. идея выражать числа в виде
								степени одного и того же основания, принадлежит Михаилу Штифелю.
								    Но во времена Штифеля математика была не столь развита и
								идея логарифма не нашла своего развития.      Логарифмы были
								изобретены позже одновременно и независимо друг от друга
								шотландским учёным Джоном Непером (1550-1617) и швейцарцем
								Иобстом Бюрги (1552-1632).        Слово «логарифм»  происходит
								от греческих слов logoz и ariumoz - оно означает буквально
								“числа отношений”. Впервые понятие логарифма  ввел английский
								математик  Джон Непер, о чем сообщалось в публикации 1614 года,
								когда была опубликована работа Непера под названием «Описание
								удивительной таблицы логарифмов».
							</div>
						</div>
						<div className='absolute right-[25px] bottom-[25px] bg-lightPurple w-[131px] h-[45px] flex justify-center items-center rounded-[22px] text-[15px]'>
							Далее
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Topic
