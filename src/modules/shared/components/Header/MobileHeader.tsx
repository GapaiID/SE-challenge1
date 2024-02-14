'use client';
import React, { useState, Fragment } from 'react';
import Brand from './Brand';
import ThemeSwitch from './ThemeSwitch';
import Hamburger from 'hamburger-react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

type MobileHeaderProps = {
	children?: React.ReactNode;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ children }) => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div
				data-testid="MobileHeader"
				className="md:hidden w-full p-4 sticky top-0 z-[9] bg-white shadow-lg dark:bg-zinc-900"
			>
				<div className="flex">
					<div>
						<Brand />
					</div>
					<div className="absolute right-5 top-2 z-20">
						<Hamburger toggled={isOpen} toggle={openModal} />
					</div>
				</div>
			</div>

			<div>
				<Transition show={isOpen} as={Fragment}>
					<Dialog as="div" className="relative z-10" onClose={closeModal}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black/25" />
						</Transition.Child>

						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Dialog.Panel className="w-full h-screen max-w-md transform overflow-hidden bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
										<XMarkIcon
											onClick={closeModal}
											height={30}
											width={30}
											className="float-right"
										/>
										<div className="mt-2 flex flex-col top-[40%] absolute w-[90%]">
											<Link
												href="/single-post"
												className="text-[30px] text-center flex justify-center"
												onClick={closeModal}
											>
												Single Post
												<ArrowRightCircleIcon
													height={30}
													width={30}
													className="mt-2 ml-3"
												/>
											</Link>
											<Link
												href="/author"
												className="text-[30px] text-center flex justify-center"
												onClick={closeModal}
											>
												Author{' '}
												<ArrowRightCircleIcon
													height={30}
													width={30}
													className="mt-2 ml-3"
												/>
											</Link>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</div>
		</>
	);
};

export default MobileHeader;
