import Additional from '@/components/profile/Additional'
import News from '@/components/profile/News'
import Subjects from '@/components/profile/Subjects'
import Teacher from '@/components/profile/Teacher'
import Teachers from '@/components/profile/Teachers'

const Profile = () => {
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Teacher />
			{/* main div */}
			<div className='my-[25px] flex gap-[25px]'>
				{/* left div */}
				<div className='w-full flex justify-center flex-col'>
					{/* @TODO: make a transition animation  */}
					<Subjects />
					<Additional />
				</div>
				{/* right div */}
				<div className='w-full flex justify-center flex-col'>
					<News />
					<Teachers />
				</div>
			</div>
		</div>
	)
}

export default Profile
