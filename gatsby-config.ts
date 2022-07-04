import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
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
