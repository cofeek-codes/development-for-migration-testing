import Link from 'next/link'

interface IProject {
	title: string
	description: string
	url: string
}

const Project = (props: IProject) => {
	return (
		<div className='mb-[25px] w-full flex justify-between rounded-[22px] bg-purple p-[20px]'>
			<div className='max-w-[835px]'>
				<h2 className='text-[23px] mb-[10px]'>{props.title}</h2>
				<p className='text-[15px]'>{props.description}</p>
			</div>
			<div className='flex items-end'>
				<Link
					className='bg-lightPurple hover:bg-buttonsHover hover:transition-[0.3s] transition-[0.3s] rounded-[22px] py-[10px] px-[35px]'
					href={props.url}
				>
					<span className='text-[15px] font-regular'>Перейти</span>
				</Link>
			</div>
		</div>
	)
}

export default Project
