import React from 'react';
import slugify from 'slugify';
import * as S from './PostTitle.styled';
import { BiTime } from 'react-icons/bi';

interface PostTitleProps {
	title: string;
	readingTime: string;
	categories: { name: string; id: string }[];
}

const PostTitle: Component<PostTitleProps> = ({
	title,
	readingTime,
	categories,
}) => {
	return (
		<S.PostTitleWrapper>
			<S.PostTitleTimeWrapper>
				<BiTime />
				<p>{readingTime} min read</p>
			</S.PostTitleTimeWrapper>
			<S.PostTitle>{title}</S.PostTitle>
			<S.PostTitleCategories>
				{categories.map((category) => (
					<S.PostTitleCategory
						key={category.id}
						to={`/category/${slugify(category.name, { lower: true })}`}
					>
						#{category.name}
						<S.PostTitleCategoryUnderline />
					</S.PostTitleCategory>
				))}
			</S.PostTitleCategories>
		</S.PostTitleWrapper>
	);
};

export default PostTitle;
