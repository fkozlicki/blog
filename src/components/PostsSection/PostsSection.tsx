import React, { FC } from 'react';
import PostPreview, { IPost } from '../PostPreview/PostPreview';
import * as S from './PostsSection.styled';

type PostsSectionProps = {
  title: string;
  posts: IPost[];
};

const PostsSection: FC<PostsSectionProps> = ({ posts, title }) => {
  return (
    <S.Section>
      <S.Heading>{title}</S.Heading>
      <S.Grid>
        {posts.map((post: IPost) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default PostsSection;
