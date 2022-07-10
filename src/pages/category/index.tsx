import { graphql } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import PostsSection from '../../components/PostsSection/PostsSection';
import { Container } from '../../styles/Global.styled';

type CategoryProps = {
  data: {
    allStrapiCategory: {
      nodes: [
        {
          name: string;
          posts: [
            {
              id: string;
              title: string;
              excerpt: string;
            }
          ];
        }
      ];
    };
  };
};

const Category: FC<CategoryProps> = ({ data }) => {
  const categories = data.allStrapiCategory.nodes;

  return (
    <Layout>
      <Container>
        <main>
          {categories.map((category) => (
            <PostsSection title={category.name} posts={category.posts} />
          ))}
        </main>
      </Container>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  {
    allStrapiCategory {
      nodes {
        posts {
          title
          excerpt
        }
        name
      }
    }
  }
`;
