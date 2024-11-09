import News from '@/components/profile/News'
import Teacher from '@/components/profile/Teacher'
import Topics from '@/components/profile/Topics'

const Profile = () => {
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Teacher />
			{/* main div */}
			<div className='my-[25px] flex gap-[25px]'>
				{/* left div */}
				<div className='w-[319px] flex justify-start flex-col'>
					{/* @TODO: make a transition animation  */}
					<Topics />
				</div>
				{/* right div */}
				<div className='w-full flex justify-center flex-col'>
					<News />
				</div>
			</div>
		</div>
	)
}

export default Profile
