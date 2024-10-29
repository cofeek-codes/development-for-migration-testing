import Student from '@/components/profile/Student'
import News from '@/components/profile/News'
import Subject from '@/components/profile/Subject'

const Profile = () => {
	return (
		<div className='w-[1080px] px-[30px] mx-auto'>
			<Student />
			{/* main div */}
			<div className='mt-[25px] flex'>
				{/* left div */}
				<Subject />
				{/* right div */}
				<News />
			</div>
		</div>
	)
}

export default Profile
