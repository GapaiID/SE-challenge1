import React from 'react';
import PostImage from '../../../public/post-image.jpg';
import Image from 'next/image';
import ProfileIcon from '../shared/components/Icons/ProfileIcon';
import Link from 'next/link';

type SingleCardProps = {
	children?: React.ReactNode;
};

const SingleCard: React.FC<SingleCardProps> = ({ children }) => {
	const title =
		'The Impact of Technology on the Workplace: How Technology is Changing';
	return (
		<div
			data-testid="SingleCard"
			className="p-3 border-[1px] border-[#E8E8EA] dark:border-zinc-700/50 rounded-lg"
		>
			<div>
				<Link href="/single-post">
					<Image
						src={PostImage}
						alt={title}
						className="rounded-lg mb-2 hover:opacity-90"
					/>
				</Link>
			</div>
			<div className="p-2">
				<div>
					<span className="rounded-md text-sm bg-[#4B6BFB0D] dark:bg-[#4B6BFB] dark:text-white text-[#4B6BFB] my-4 pr-2 px-2">
						Technology
					</span>
				</div>
				<div>
					<Link href="/single-post">
						<h1 className="text-zinc-900 dark:text-white py-3 text-xl font-semibold hover:underline">
							{title}
						</h1>
					</Link>
				</div>
				<div className="flex leading-7">
					<ProfileIcon color="#97989f" height={30} width={30} />
					<span className="ml-2 text-gray-500 dark:text-white text-[16px]">
						Jonathan Doe
					</span>
					<span className="ml-5 text-gray-500 dark:text-white text-[16px]">
						August 20, 2022
					</span>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
