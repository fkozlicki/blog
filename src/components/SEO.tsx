import React from 'react';

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
}

const SEO: Component<SEOProps> = ({ title, description, image }) => {
	return (
		<>
			<meta charSet="utf-8" />
			{/* <meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
			<title>{title ?? 'Filip Koźlicki Blog'}</title>
			<meta
				name="description"
				content={
					description ??
					'Blog dla początkujących programistów. Znajdziesz tu głownie posty w tematyce web developmentu - HTML, CSS, JAVASCRIPT, REACT, NEXT.JS, GATSBY'
				}
			/>
			<meta name="image" content="../images/preview.png" />
			<link rel="icon" href="" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content="https://fkozlicki.pl" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="../images/preview.png" />
			<meta property="og:site_name" content="Filip Koźlicki Blog" />
			<meta property="og:locale" content="pl_PL" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title ?? 'Filip Koźlicki Blog'} />
			<meta
				name="twitter:description"
				content={
					description ??
					'Blog dla początkujących programistów. Znajdziesz tu głownie posty w tematyce web developmentu - HTML, CSS, JAVASCRIPT, REACT, NEXT.JS, GATSBY'
				}
			/>
			<meta name="twitter:image" content="../images/preview.png" />
			<meta name="twitter:site" content="@fkozlicki" />
			<meta name="twitter:creator" content="@fkozlicki" />
		</>
	);
};

export default SEO;
