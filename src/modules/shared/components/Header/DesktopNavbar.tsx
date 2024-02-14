'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type DesktopNavbarProps = {
	children?: React.ReactNode;
};

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ children }) => {
	const pathName = usePathname();
	const singlePage =
		pathName === '/single-post'
			? 'border-b-2 border-black dark:border-white'
			: 'border-b-2 border-transparent font-light hover:dark:border-white hover:border-black';
	const authorPage =
		pathName === '/author'
			? 'border-b-2 border-black dark:border-white'
			: 'border-b-2 border-transparent font-light hover:dark:border-white hover:border-black';
	return (
		<div data-testid="DesktopNavbar h-full">
			<div className="flex flex-row items-center space-x-4 justify-center mt-1">
				<Link href="/single-post" className={`${singlePage} text-base`}>
					Single Page
				</Link>
				<Link href="/author" className={` ${authorPage} text-base`}>
					Author
				</Link>
			</div>
		</div>
	);
};

export default DesktopNavbar;
