import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { GlobalStyles } from '../styled/Global';

const PageElementWrapper: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
	<>
		<GlobalStyles />
		{element}
	</>
);

export default PageElementWrapper;
