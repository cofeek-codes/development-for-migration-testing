import type { Metadata } from 'next'
import '../globals.scss'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function ProfileLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<div className='h-screen w-screen flex flex-col text-white bg-background'>
				{children}
			</div>
		</>
	)
}
