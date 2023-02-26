import React from 'react';
import Layout from '../components/Layout/Layout';
import NotFound from '../components/NotFound/NotFound';
import SEO from '../components/SEO';

const NotFoundPage = () => {
	return (
		<Layout>
			<NotFound />
		</Layout>
	);
};

export const Head = () => <SEO title="Filip Kozlicki | 404" />;

export default NotFoundPage;
