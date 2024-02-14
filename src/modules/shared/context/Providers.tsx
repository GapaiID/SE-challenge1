'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type ComponentProps = {
	children?: React.ReactNode;
};

const Providers: React.FC<ComponentProps> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
