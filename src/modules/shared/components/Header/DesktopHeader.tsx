import React from 'react';
import Brand from './Brand';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import SearchBar from './SearchBar';

type DesktopHeaderProps = {
	children?: React.ReactNode;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = () => {
	return (
		<div
			data-testid="DesktopHeader"
			className="hidden w-9/12 mx-auto py-5 md:block"
		>
			<div className="grid-cols-3 grid gap-3">
				<Brand />
				<DesktopNavbar />
				<SearchBar />
			</div>
		</div>
	);
};

export default DesktopHeader;
