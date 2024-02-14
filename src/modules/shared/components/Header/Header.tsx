import React from 'react';
import Brand from './Brand';
import Link from 'next/link';
import NavBar from './Navbar';
import SearchBar from './SearchBar';

type HeaderProps = {
	children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div data-testid="Header" className="w-9/12 mx-auto py-5">
			<div className="grid-cols-3 grid gap-3">
				<Brand />
				<NavBar />
				<SearchBar />
			</div>
		</div>
	);
};

export default Header;
