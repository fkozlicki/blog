import dotenv from 'dotenv';
import { GatsbyConfig } from 'gatsby';
import path from 'path';
import { URL } from 'url';

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

const __dirname = new URL('.', import.meta.url).pathname;

const strapiConfig = {
	apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
	accessToken: process.env.STRAPI_TOKEN,
	collectionTypes: ['post', 'category', 'author', 'comment'],
	singleTypes: [],
};

const config: GatsbyConfig = {
	siteMetadata: {
		title: `kozlicki-blog`,
		siteUrl: `https://kozlicki-blog.pl`,
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				footnotes: true,
				gfm: true,
				plugins: [
					`gatsby-remark-autolink-headers`,
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				images: path.join(__dirname, 'src/images'),
				components: path.join(__dirname, 'src/components'),
				styled: path.join(__dirname, 'src/styled'),
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: strapiConfig,
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Rubik',
							variants: ['300', '400', '500', '600', '700', '800'],
						},
						{
							family: 'Permanent Marker',
							variants: ['400'],
						},
					],
				},
			},
		},
	],
};

export default config;
