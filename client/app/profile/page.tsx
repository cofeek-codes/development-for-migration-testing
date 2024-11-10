'use client'
import Groups from '@/components/profile/Groups'
import News from '@/components/profile/News'
import Subjects from '@/components/profile/Subjects'
import Teacher from '@/components/profile/Teacher'
import Topics from '@/components/profile/Topics'
import { useState } from 'react'

const Profile = () => {
	const [isGroupOpen, setIsGroupOpen] = useState<boolean>(false)
	const [isSubjectOpen, setIsSubjectOpen] = useState<boolean>(false)
	const [currentSubjectId, setCurrentSubjectId] = useState<number>(0)
	const [currentGroupId, setCurrentGroupId] = useState<number>(0)
	const [currentGroupName, setCurrentGroupName] = useState<string>('')
	const [currentSubjectName, setCurrentSubjectName] = useState<string>('')
	return (
		<div className='w-[1080px] h-full px-[30px] mx-auto'>
			<Teacher />
			{/* main div */}
			<div className='my-[25px] flex gap-[25px]'>
				{/* left div */}
				<div className='w-[319px] flex justify-start flex-col'>
					{isSubjectOpen ? (
						<Topics
							setIsSubjectOpen={setIsSubjectOpen}
							currentGroupName={currentGroupName}
							currentSubjectName={currentSubjectName}
							currentSubjectId={currentSubjectId}
						/>
					) : isGroupOpen ? (
						<Subjects
							setIsGroupOpen={setIsGroupOpen}
							currentGroupId={currentGroupId}
							currentGroupName={currentGroupName}
							setIsSubjectOpen={setIsSubjectOpen}
							setCurrentSubjectId={setCurrentSubjectId}
							setCurrentSubjectName={setCurrentSubjectName}
						/>
					) : (
						<Groups
							setCurrentGroupId={setCurrentGroupId}
							setIsGroupOpen={setIsGroupOpen}
							setCurrentGroupName={setCurrentGroupName}
						/>
					)}
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
