import React from 'react';
import EmailIcon from '../Icons/EmailIcon';
import Brand from '../Header/Brand';
import Link from 'next/link';

type FooterProps = {
	children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
	return (
		<div
			data-testid="Footer"
			className="bg-[#F6F6F7] dark:bg-zinc-900 dark:border-zinc-950/50 border-[#E8E8EA] border-t-2"
		>
			<div className="w-9/12 mx-auto py-8 pt-16">
				<div className="flex gap-10 mb-10">
					<div className="w-[35%]">
						<h3 className="text-lg text-jakarta-sans font-semibold leading-[18px] mb-5">
							About
						</h3>
						<p className="text-[16px] text-jakarta-sans font-thin leading-6">
							Lorem ipsum dolor sit amet, <br />
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam
							<span className="pt-5">
								<span>
									<strong className="font-semibold">Email:</strong>{' '}
									info@jstemplate.net
								</span>
								<br />
								<span>
									<strong className="font-semibold">Phone:</strong> 880 123 456
									789
								</span>
							</span>
						</p>
					</div>
					<div className="w-[10%]">
						<h3 className="text-lg text-jakarta-sans font-semibold leading-[18px] mb-5">
							Quick Link
						</h3>
						<ul className="text-[#3B3C4A] dark:text-white text-jakarta-sans font-thin text-[16px]">
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Home
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									About
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Blog
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Archived
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Author
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-[10%] mr-10">
						<h3 className="text-lg text-jakarta-sans font-semibold leading-[18px] mb-5">
							Category
						</h3>
						<ul className="text-[#3B3C4A] dark:text-white text-jakarta-sans font-thin text-[16px]">
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Lifestyle
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Technology
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Travel
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Business
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Economy
								</Link>
							</li>
							<li className="pb-2">
								<Link href="#" className="hover:underline">
									Sport
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-[40%] bg-white dark:bg-black/30 p-10 py-8 rounded-md">
						<h3 className="text-lg text-center text-jakarta-sans font-semibold leading-[18px] pb-1">
							Weekly Newsletter
						</h3>
						<span className="block font-normal text-gray-400 text-center pt-1 pb-3">
							Get blog articles and offers via email
						</span>
						<div className="my-2 relative">
							<input
								type="text"
								placeholder="Your email"
								className="border-2 dark:border-zinc-900 border-gray-100 w-full h-[48px] rounded-md pl-5 pr-10 focus:outline-none"
							/>
							<EmailIcon className="w-6 h-6 absolute right-[15px] top-[10px] text-gray-500" />
						</div>
						<button className="bg-[#4B6BFB] text-center text-[16px] leading-6 text-white w-full py-3 rounded-sm hover:bg-[#375af9]">
							Subscribe
						</button>
					</div>
				</div>
				<div className="border-t-2 border-[#DCDDDF] py-4 flex w-full">
					<div className="flex">
						<Brand />
					</div>
					<div className="leading-8 flex justify-end float-right gap-4 w-full">
						<Link href="#" className="hover:underline">
							Terms of Use
						</Link>
						<Link href="#" className="hover:underline">
							Privacy Policy
						</Link>
						<Link href="#" className="hover:underline">
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
