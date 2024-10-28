import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.scss'
import Header from '@/components/header/Header'

const EuclidRegular = localFont({
	src: '../fonts/EuclidCircularB-Regular.otf',
})

const EuclidBold = localFont({
	src: '../fonts/EuclidCircularB-Bold.otf',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<div className='h-screen w-screen flex justify-center items-center flex-col text-white bg-background'>
				{children}
			</div>
		</>
	)
}
