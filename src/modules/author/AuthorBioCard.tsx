import React from 'react';
import Image from 'next/image';
import AuthorImage from '../../../public/author.jpg';
import { SocialIcon } from 'react-social-icons';

type AuthorBioCardProps = {
	children?: React.ReactNode;
};

const AuthorBioCard: React.FC<AuthorBioCardProps> = ({ children }) => {
	return (
		<div data-testid="AuthorBioCard">
			<div className="bg-[#F6F6F7] dark:bg-zinc-600/50 w-9/12 mx-auto py-10 my-10 rounded-md">
				<div className="flex justify-center items-center">
					<div>
						<Image
							src={AuthorImage}
							alt="Jonathan Doe"
							height={64}
							width="64"
							className="rounded-full"
						/>
					</div>
					<div className="ml-5">
						<h1 className="text-[20px]">Jonathan Doe</h1>
						<span className="font-medium text-[#696A75] dark:text-white">
							Collaborator / Editor
						</span>
					</div>
				</div>
				<div className="w-[70%] block mx-auto text-center my-8">
					<p className="text-[#3B3C4A] dark:text-white text-lg">
						Meet Jonathan Doe, a passionate writer and blogger with a love for
						technology and travel. Jonathan holds a degree in Computer Science
						and has spent years working in the tech industry, gaining a deep
						understanding of the impact technology has on our lives.
					</p>
					<div className="mt-5">
						<SocialIcon
							href="#"
							network="facebook"
							bgColor="#696A75"
							style={{ height: 30, width: 30 }}
							className="mr-1"
						></SocialIcon>
						<SocialIcon
							network="twitter"
							href="#"
							bgColor="#696A75"
							style={{ height: 30, width: 30 }}
							className="mr-1"
						></SocialIcon>
						<SocialIcon
							network="instagram"
							href="#"
							bgColor="#696A75"
							style={{ height: 30, width: 30 }}
							className="mr-1"
						></SocialIcon>
						<SocialIcon
							network="vimeo"
							href="#"
							bgColor="#696A75"
							style={{ height: 30, width: 30 }}
							className="mr-1"
						></SocialIcon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthorBioCard;
