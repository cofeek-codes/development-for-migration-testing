import Student from '@/components/profile/Student'
import News from '@/components/profile/News'
import Subject from '@/components/profile/Subject'
import Additional from '@/components/profile/Additional'
import Teachers from '@/components/profile/Teachers'
import Subjects from '@/components/profile/Subjects'

const Profile = () => {
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Student />
			{/* main div */}
			<div className='mt-[25px] flex gap-[25px]'>
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
