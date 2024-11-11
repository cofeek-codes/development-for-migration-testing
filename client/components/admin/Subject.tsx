import React from 'react'

const Subject = () => {
	return (
		<div className='bg-lightPurple p-[15px] text-[18px] rounded-[10px] mt-[21px] flex items-center justify-between'>
			<div className='w-fit'>
				<div className='w-[250px]'>Математика</div>
			</div>
			<div>
				<div>Группа: ИСиП-401</div>
			</div>
			<div className='flex'>
				<div className='bg-background rounded-[10px] px-[12px] mr-[10px] py-[8px] text-[15px]'>
					Изменить
				</div>
				<div className='bg-background rounded-[10px] px-[12px] py-[8px] text-[15px]'>
					Удалить
				</div>
			</div>
		</div>
	)
}

export default Subject
