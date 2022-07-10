import { Link } from 'gatsby';
import React, { FC } from 'react';
import slugify from 'slugify';
import * as S from './PostPreview.styled';

export interface IPost {
  id: string;
  title: string;
  excerpt: string;
  categories?: [{ name: string }];
}

type PostPreviewProps = {
  post: IPost;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <S.Preview>
      <Link
        to={`/post/${slugify(post.title, { lower: true }).replace('.', '')}`}
      >
        <S.Header>
          <h3>{post.title}</h3>
          <div>
            {post.categories &&
              post.categories.map((category) => (
                <S.Badge key={category.name}>{category.name}</S.Badge>
              ))}
          </div>
        </S.Header>
        <p>{post.excerpt}</p>
      </Link>
    </S.Preview>
  );
};

export default PostPreview;
