import React from 'react';
import ProfileIcon from '../shared/components/Icons/ProfileIcon';
import Image from 'next/image';
import PostImage from '../../../public/post-image.jpg';

type PostContentProps = {
	children?: React.ReactNode;
};

const PostContent: React.FC<PostContentProps> = ({ children }) => {
	const title =
		'The Impact of Technology on the Workplace: How Technology is Changing';
	return (
		<div data-testid="PostContent">
			<div className="post-content w-full max-w-[800px] mx-auto my-10">
				<span className="bg-blue-600 text-white py-2 rounded-md text-[14px] px-3">
					Technology
				</span>
				<h1 className="text-4xl font-semibold leading-10 my-5">{title}</h1>
				<div className="flex leading-7">
					<ProfileIcon color="#97989f" height={30} width={30} />
					<span className="ml-2 text-gray-500 font-semibold">
						Tracey Wilson
					</span>
					<span className="ml-5 text-gray-500">August 20, 2022</span>
				</div>
				<div>
					<Image src={PostImage} alt={title} className="rounded-md my-5" />
				</div>
				<div>
					<p className="text-source-serif text-xl leading-8 font-normal text-[#3B3C4A] pb-10 dark:text-white">
						Traveling is an enriching experience that opens up new horizons,
						exposes us to different cultures, and creates memories that last a
						lifetime. However, traveling can also be stressful and overwhelming,
						especially if you don't plan and prepare adequately. In this blog
						article, we'll explore tips and tricks for a memorable journey and
						how to make the most of your travels.
					</p>
					<p className="text-source-serif text-xl leading-8 font-normal text-[#3B3C4A] pb-10 dark:text-white">
						One of the most rewarding aspects of traveling is immersing yourself
						in the local culture and customs. This includes trying local
						cuisine, attending cultural events and festivals, and interacting
						with locals. Learning a few phrases in the local language can also
						go a long way in making connections and showing respect.
					</p>
					<p className="text-source-serif text-xl leading-8 font-normal text-[#3B3C4A] pb-10 dark:text-white">
						Finally, don't forget to capture memories of your journey. Whether
						it's through photographs, journaling, or souvenirs, preserving the
						moments and experiences of your travels can bring joy and nostalgia
						for years to come. However, it's also essential to be present in the
						moment and not let technology distract you from the beauty of your
						surroundings.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PostContent;
