import { Work_Sans, Source_Serif_4, Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/modules/shared/context/Providers';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'] });
const sourceSerif = Source_Serif_4({
	subsets: ['latin'],
	variable: '--font-source-serif',
});

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-jakarta-sans',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			style={{ colorScheme: 'light' }}
			suppressHydrationWarning={true}
		>
			<body
				className={`${workSans.className} ${sourceSerif.variable} ${plusJakartaSans.variable} bg-white dark:bg-zinc-900`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
