import Link from 'next/link';
import React from 'react';

type NavBarProps = {
	children?: React.ReactNode;
};

const NavBar: React.FC<NavBarProps> = ({ children }) => {
	return (
		<div data-testid="NavBar h-full">
			<div className="flex flex-row items-center space-x-4 justify-center mt-1">
				<Link href="/single-page" className="text-base font-light">
					Single Page
				</Link>
				<Link href="/author" className="text-base font-light">
					Author
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
