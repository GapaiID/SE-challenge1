import React from 'react';

type BrandProps = {
	className?: string;
};

const Brand: React.FC<BrandProps> = ({ className }) => {
	return (
		<div className={className}>
			<div className="font-light text-xl">
				Meta<span className="font-semibold">Blog</span>
			</div>
		</div>
	);
};

export default Brand;
