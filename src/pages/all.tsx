import { graphql } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/Layout/Layout';
import PostPreview from '../components/PostPreview/PostPreview';
import { Container } from '../styles/Global.styled';

type AllProps = {
  data: {
    allStrapiPost: {
      nodes: [
        {
          id: string;
          title: string;
          excerpt: string;
          categories: [{ name: string }];
        }
      ];
    };
  };
};

const All: FC<AllProps> = ({ data }) => {
  const posts = data.allStrapiPost.nodes;
  return (
    <Layout>
      <main>
        <Container>
          {posts.map((post) => (
            <PostPreview post={post} />
          ))}
        </Container>
      </main>
    </Layout>
  );
};

export default All;

export const query = graphql`
  {
    allStrapiPost(sort: { fields: title, order: ASC }) {
      nodes {
        title
        excerpt
        id
        categories {
          name
        }
      }
    }
  }
`;
