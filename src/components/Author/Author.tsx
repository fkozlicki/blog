import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import * as S from './Author.styled';

interface AuthorProps {
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
	createdAt: string;
}

const Author: Component<AuthorProps> = ({ author, createdAt }) => {
	return (
		<S.AuthorContentWrapper>
			<S.AuthorContent>
				<S.AuthorImage
					image={author.photo.localFile.childImageSharp.gatsbyImageData}
					alt=""
				/>
				<S.AuthorInfo>
					<S.AuthorName>{author.name}</S.AuthorName>
					<S.AuthorBio>{author.bio}</S.AuthorBio>
					<S.AuthorCreatedAt>{createdAt}</S.AuthorCreatedAt>
				</S.AuthorInfo>
			</S.AuthorContent>
		</S.AuthorContentWrapper>
	);
};

export default Author;
