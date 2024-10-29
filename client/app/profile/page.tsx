import Student from '@/components/profile/Student'
import News from '@/components/profile/News'
import Subject from '@/components/profile/Subject'
import Additional from '@/components/profile/Additional'
import Subscriptions from '@/components/profile/Subscriptions'

const Profile = () => {
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Student />
			{/* main div */}
			<div className='mt-[25px] flex gap-[25px]'>
				{/* left div */}
				<div className='w-full flex justify-center flex-col'>
					<Subject />
					<Additional />
				</div>
				{/* right div */}
				<div className='w-full flex justify-center flex-col ml-[25px]'>
					<News />
					<Subscriptions />
				</div>
			</div>
		</div>
	)
}

export default Profile
