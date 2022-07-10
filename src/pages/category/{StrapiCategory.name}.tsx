import { graphql } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import { Container } from '../../styles/Global.styled';

type CategoryProps = {
  data: {
    allStrapiPost: {
      edges: [
        post: {
          node: {
            title: string;
            excerpt: string;
            id: string;
          };
        }
      ];
    };
  };
  params: {
    name: string;
  };
};

const Category: FC<CategoryProps> = ({ data, params: { name } }) => {
  const posts = data.allStrapiPost.edges;
  console.log(name, posts);

  return (
    <Layout>
      <main>
        <Container>
          <h1>{name}</h1>
          {posts.map((post) => (
            <div key={post.node.id}>
              <h2>{post.node.title}</h2>
              <p>{post.node.excerpt}</p>
            </div>
          ))}
        </Container>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetCategoryPosts($name: String) {
    allStrapiPost(
      filter: { categories: { elemMatch: { name: { eq: $name } } } }
      sort: { fields: title }
    ) {
      edges {
        node {
          excerpt
          title
          id
        }
      }
    }
  }
`;

export default Category;
