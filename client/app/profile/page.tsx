import Student from '@/components/profile/Student'
import Image from 'next/image'

import arrow from '/assets/arrow.png'

const Profile = () => {
	return (
		<div className='w-[1080px] px-[30px] mx-auto'>
			<Student />
			{/* main div */}
			<div className='mt-[25px] flex justify-between'>
				{/* left div */}
				<div className='flex justify-center items-center bg-purple'>
					{/* title bar */}
					<div className='flex justify-start items-center'>
						<div>
							<Image src={arrow} width={26} height={32} alt='go back arrow' />
						</div>
						<div>Математика</div>
					</div>
				</div>
				{/* right div */}
				<div></div>
			</div>
		</div>
	)
}

export default Profile
