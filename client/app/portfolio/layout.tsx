import Header from '@/components/header/Header'
import type { Metadata } from 'next'
import '../globals.scss'

export const metadata: Metadata = {
	title: 'Портфолио',
	description: 'Страница с проектами пользователя',
}

export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<div className='h-full w-screen flex flex-col text-white bg-background'>
				{children}
			</div>
		</>
	)
}
