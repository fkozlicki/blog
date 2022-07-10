import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { GlobalStyle } from '../components/Layout/Layout.styled';
import PostsSection from '../components/PostsSection/PostsSection';
import * as S from '../styles/Global.styled';

const featuredPostsQuery = graphql`
  query featured {
    allStrapiPost(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
        title
        excerpt
        categories {
          name
        }
      }
    }
  }
`;

const recentPostsQuery = graphql`
  query recent {
    allStrapiPost(
      filter: { featured: { eq: false } }
      sort: { fields: createdAt, order: ASC }
      limit: 4
    ) {
      nodes {
        title
        excerpt
        categories {
          name
        }
      }
    }
  }
`;

// markup
const IndexPage = () => {
  // const {
  //   allStrapiPost: { nodes: featured },
  // } = useStaticQuery(featuredPostsQuery);
  const {
    allStrapiPost: { nodes: recent },
  } = useStaticQuery(recentPostsQuery);

  console.log(recent);

  return (
    <>
      <GlobalStyle />

      <Header />
      <S.Main>
        <S.Container>
          <div>
            {/* <PostsSection title="Wyróżnione Posty" posts={featured} /> */}
            <PostsSection title="Ostatnie Posty" posts={recent} />
          </div>
        </S.Container>
      </S.Main>
      <Footer />
    </>
  );
};

export default IndexPage;
