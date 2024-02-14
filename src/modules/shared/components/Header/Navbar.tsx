'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type NavBarProps = {
	children?: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ children }) => {
	const pathName = usePathname();
	const singlePage =
		pathName === '/single-page'
			? 'border-b-2 border-black dark:border-white'
			: 'border-b-2 border-transparent font-light hover:dark:border-white hover:border-black';
	const authorPage =
		pathName === '/author'
			? 'border-b-2 border-black dark:border-white'
			: 'border-b-2 border-transparent font-light hover:dark:border-white hover:border-black';
	return (
		<div data-testid="NavBar h-full">
			<div className="flex flex-row items-center space-x-4 justify-center mt-1">
				<Link href="/single-page" className={`${singlePage} text-base`}>
					Single Page
				</Link>
				<Link href="/author" className={` ${authorPage} text-base`}>
					Author
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
