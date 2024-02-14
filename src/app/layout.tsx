import type { Metadata } from 'next';
import { Work_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'] });
const sourceSerif = Source_Serif_4({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={workSans.className}>{children}</body>
		</html>
	);
}
