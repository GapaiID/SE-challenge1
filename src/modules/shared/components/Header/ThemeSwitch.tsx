import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
	const [enabled, setEnabled] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		if (enabled) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	});

	return (
		<div className="ml-[20px] mt-[3px]">
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? 'bg-zinc-800' : 'bg-zinc-200'}
          relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${
						enabled ? 'translate-x-5 bg-zinc-900' : 'translate-x-0 bg-white'
					}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out p-[1.5px]`}
				>
					{enabled ? <MoonIcon color="#fff" /> : <SunIcon color="#000" />}
				</span>
			</Switch>
		</div>
	);
}
