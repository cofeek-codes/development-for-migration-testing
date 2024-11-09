const AccordionItem = ({ title, group, rating }: any) => (
	<div className='bg-lightPurple p-4 border-b'>
		<div className='flex justify-between items-center'>
			<span className='font-semibold'>{title}</span>
			<div className='flex items-center space-x-2'>
				<span>{group}</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>
			<span className='text-right'>{rating}/10</span>
		</div>
	</div>
)

const Accordion = () => (
	<div className='space-y-4'>
		<AccordionItem
			title='Название темы'
			group='Группа студентов'
			rating='8.5'
		/>
		<AccordionItem title='Другая тема' group='Еще одна группа' rating='9.2' />
		{/* Добавьте больше элементов accordin как нужно */}
	</div>
)

export default Accordion
