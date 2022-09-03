import styled from 'styled-components';

type LayoutProps = {
	mobileMenuOpen: boolean;
};

export const Layout = styled.div<LayoutProps>`
	background: ${(props) => props.theme.colors.backgroundPrimary};
	height: ${(props) => props.mobileMenuOpen && '100vh'};
	overflow: ${(props) => props.mobileMenuOpen && 'hidden'};
`;
