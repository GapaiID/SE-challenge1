import React from 'react';

type HeaderProps = {
	children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = () => {
	return (
		<div data-testid="Header">
			<div className="">
				Meta<span>Blog</span>
			</div>
		</div>
	);
};

export default Header;
