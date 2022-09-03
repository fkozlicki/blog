import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { MobileMenuContextProvider } from '../context/MobileMenuContext';
import { ThemeContextProvider } from '../context/ThemeContext';

const RootElementWrapper: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
	return (
		<ThemeContextProvider>
			<MobileMenuContextProvider>{element}</MobileMenuContextProvider>
		</ThemeContextProvider>
	);
};

export default RootElementWrapper;
