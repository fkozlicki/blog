import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

export const PostTitleWrapper = styled.div`
	margin-bottom: 30px;
	color: ${(props) => props.theme.colors.fontPrimary};
`;

export const PostTitleTimeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 20px;
`;

export const PostTitle = styled.h1`
	text-align: center;
	font-size: 40px;
	margin-bottom: 10px;
`;

export const PostTitleCategories = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
`;

export const PostTitleCategoryUnderline = styled.span`
	position: absolute;
	bottom: -2px;
	left: 0;
	height: 3px;
	width: 100%;
	background: ${(props) => props.theme.colors.borderPrimary};
	overflow: hidden;

	:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		background: ${(props) => props.theme.colors.backgroundPrimary};
		background: ${(props) => props.theme.gradients.toc};
		height: 100%;
		width: 100%;
		transition: transform 0.2s ease-in;
		transform: translateX(-101%);
	}
`;

export const PostTitleCategory = styled((props) => <Link {...props} />)`
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 400;
	position: relative;
	color: ${(props) => props.theme.colors.fontPrimary};

	:hover {
		${PostTitleCategoryUnderline} {
			:after {
				transform: translateX(0);
			}
		}
	}
`;
