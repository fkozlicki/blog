import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Container } from '../../styled/Utils';

interface ISubMenuProps {
	isOpen: boolean;
}

interface ISubMenuToggleBtnProps {
	isSubMenuOpen: boolean;
}

interface HeaderProps {
	colored?: boolean;
}

export const Header = styled.header<HeaderProps>`
	background: ${(props) =>
		props.colored && props.theme.colors.backgroundSecondary};
	.logo {
		${(props) =>
			props.theme.name === 'dark' &&
			css`
				filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
					brightness(102%) contrast(102%);
			`}
	}
`;

export const HeaderContent = styled(Container)`
	display: flex;
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
`;

export const HeaderLinkList = styled.div`
	display: none;
	align-items: center;
	gap: 10px;
	padding: 0 10px;
	margin-left: auto;

	${({ theme }) => theme.media.smallDesktop} {
		display: flex;
	}
`;

export const HeaderLink = styled((props) => <Link {...props} />)`
	padding: 10px;
	line-height: 25px;
	color: ${(props) => props.theme.colors.fontPrimary};
`;

export const HeaderCategoriesLinkList = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	position: relative;
`;

export const HeaderCategoryLink = styled((props) => <Link {...props} />)`
	line-height: 25px;
	padding: 5px;
	color: ${(props) => props.theme.colors.fontPrimary};
`;

export const HeaderCategoriesButton = styled.button<ISubMenuToggleBtnProps>`
	font-size: 20px;
	line-height: 0.5;
	transform: ${(props) =>
		props.isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)'};
	transition: transform 250ms ease-out, background 100ms ease-out;
	transform-origin: center;
	border-radius: 9999px;
	color: ${(props) => props.theme.colors.fontPrimary};
`;

export const HeaderCategoriesList = styled.div<ISubMenuProps>`
	position: absolute;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	background: ${(props) => props.theme.colors.backgroundPrimary};
	padding: 10px;
	border-radius: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px 32px;
	box-shadow: 0px 8px 35px -12px ${(props) => props.theme.colors.shadow};
	opacity: ${(props) => (props.isOpen ? 1 : 0)};
	visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
	transition: opacity 150ms ease-out, visibility 150ms ease-out;
`;

export const MenuButton = styled.button`
	margin-left: auto;
	font-size: 25px;
	line-height: 0.1;
	z-index: 1000;
	color: ${(props) => props.theme.colors.fontPrimary};

	${({ theme }) => theme.media.smallDesktop} {
		display: none;
	}
`;

export const ThemeButton = styled.button`
	display: none;
	color: ${(props) => props.theme.colors.fontPrimary};

	${({ theme }) => theme.media.smallDesktop} {
		display: inline-flex;
		align-items: center;
		font-size: 18px;
	}
`;
