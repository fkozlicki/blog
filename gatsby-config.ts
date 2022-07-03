import type { GatsbyConfig } from 'gatsby';

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
