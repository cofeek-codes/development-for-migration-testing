'use client'

import Student from '@/components/profile/Student'
import News from '@/components/profile/News'
import Subject from '@/components/profile/Subject'
import Additional from '@/components/profile/Additional'
import Teachers from '@/components/profile/Teachers'
import Subjects from '@/components/profile/Subjects'
import { useState } from 'react'

const Profile = () => {
	const [isSubjectOpen, setIsSubjectOpen] = useState<boolean>(false)
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Student />
			{/* main div */}
			<div className='mt-[25px] flex gap-[25px]'>
				{/* left div */}
				<div className='w-full flex justify-center flex-col'>
					{isSubjectOpen ? (
						<Subject setIsSubjectOpen={setIsSubjectOpen} />
					) : (
						<Subjects setIsSubjectOpen={setIsSubjectOpen} />
					)}
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
