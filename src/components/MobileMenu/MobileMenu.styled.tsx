import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import React from 'react';

interface MobileMenuProps {
	open: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
	display: flex;
	position: fixed;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	background: ${(props) => props.theme.colors.backgroundGlass};
	backdrop-filter: blur(4px);
	z-index: 100;
	transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 250ms ease-in-out;

	${({ theme }) => theme.media.smallDesktop} {
		display: none;
	}
`;

export const MobileMenuContentWrapper = styled.div`
	height: 75%;
	width: 75%;
	margin-top: auto;
	margin-bottom: auto;
`;

export const MobileMenuContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	height: 100%;
`;

interface MobileMenuLinkProps {
	$isCategory?: boolean;
}

export const MobileMenuLink = styled((props) => (
	<Link {...props} />
))<MobileMenuLinkProps>`
	display: block;
	padding: 16px 16px 16px 32px;
	font-size: 28px;
	font-weight: 500;
	color: ${(props) => props.theme.colors.fontPrimary};
	${(props) =>
		props.$isCategory === true &&
		css`
			font-size: 24px;
			padding: 8px 16px 8px 32px;
			margin-left: 20px;
		`};
`;

export const ThemeButton = styled.button`
	margin-left: 32px;
	font-size: 32px;
	color: ${(props) => props.theme.colors.fontPrimary};
`;
