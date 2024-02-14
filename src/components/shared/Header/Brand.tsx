import React from 'react';

type BrandProps = {
	children?: React.ReactNode;
};

const Brand: React.FC<BrandProps> = ({ children }) => {
	return (
		<div>
			<div className="font-light text-xl">
				Meta<span className="font-semibold">Blog</span>
			</div>
		</div>
	);
};

export default Brand;
