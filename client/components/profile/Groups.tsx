const Groups = () => {
	return (
		<div className='mb-[25px] w-[319px]'>
			{/* title bar */}
			<div className='flex w-full justify-center font-regular mb-[5px] text-[30px]'>
				Основное
			</div>
			<div className='flex flex-col rounded-[22px] justify-start bg-purple p-[25px] h-[600px] overflow-scroll'>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						ИСиП-401
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						ИСиП-301
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
				<div>
					<p className='text-[22px] py-[10px] px-[15px] cursor-pointer mb-[5px] rounded-[10px] transition-[0.3s] hover:bg-lightPurple hover:transition-[0.3s]'>
						ИСиП-201
					</p>
					<hr className='border-t-2 border-solid border-t-white mb-[5px]' />
				</div>
			</div>
		</div>
	)
}

export default Groups
