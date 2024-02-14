import type { Metadata } from 'next';
import { Work_Sans, Source_Serif_4 } from 'next/font/google';
import Providers from '@/modules/shared/context/Providers';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'] });
const sourceSerif = Source_Serif_4({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${workSans.className} bg-white dark:bg-zinc-900`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
