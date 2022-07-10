import { graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import Markdown from '../../components/Markdown/Markdown';
import { Container } from '../../styles/Global.styled';
import * as S from '../../styles/pages/Post.styled';
import 'moment/locale/pl';
moment.locale('pl');

interface PostProps {
  data: {
    strapiPost: {
      title: string;
      author: {
        name: string;
        bio: string;
        photo: {
          localFile: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
      categories: [{ name: string }];
      createdAt: string;
      content: {
        data: {
          content: string;
        };
      };
    };
  };
}

const Post: FC<PostProps> = ({ data }) => {
  const post = data.strapiPost;

  return (
    <Layout>
      <main>
        <Container>
          <S.Title>{post.title}</S.Title>
          <S.Categories>
            {post.categories.map((category) => (
              <span key={category.name}>{category.name}</span>
            ))}
          </S.Categories>
          <S.Author>
            <GatsbyImage
              image={
                post.author.photo.localFile.childImageSharp.gatsbyImageData
              }
              alt="author"
              className="author-image"
            />
            <div>
              <p>{post.author.name}</p>
              <p>{post.author.bio}</p>
              <p>{moment(post.createdAt).format('LL')}</p>
            </div>
          </S.Author>

          <Markdown text={post.content.data.content} />
        </Container>
      </main>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query GetSinglePost($title: String) {
    strapiPost(title: { eq: $title }) {
      title
      author {
        name
        bio
        photo {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: TRACED_SVG
                height: 64
                width: 64
              )
            }
          }
        }
      }
      categories {
        name
      }
      createdAt(locale: "pl")
      content {
        data {
          content
        }
      }
    }
  }
`;
