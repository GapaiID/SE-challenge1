'use client';

import React from 'react';
import SearchIcon from '../Icons/SearchIcon';
import ThemeSwitch from './ThemeSwitch';

type SearchBarProps = {
	children?: React.ReactNode;
};

const SearchBar: React.FC<SearchBarProps> = ({ children }) => {
	return (
		<div data-testid="SearchBar">
			<div className="float-right flex">
				<div className="relative">
					<input
						type="text"
						className="h-[36px] w-[166px] bg-zinc-100 px-3 text-sm focus:outline-none text-zinc-400 pr-[30px] rounded-md dark:bg-zinc-700 dark:text-zinc-400"
						placeholder="Search"
					/>
					<div className="absolute right-[10px] top-[10px]">
						<SearchIcon />
					</div>
				</div>

				<div>
					<ThemeSwitch />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
