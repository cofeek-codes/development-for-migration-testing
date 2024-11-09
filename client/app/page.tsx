'use client'

import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import Loading from '@/components/Loading'

export default function Home() {
	const router = useRouter()
	useEffect(() => {
		if (Cookies.get('user_id') == undefined) {
			router.push('/auth')
		} else {
			router.push('/profile')
		}
	}, [])
	return <Loading />
}
