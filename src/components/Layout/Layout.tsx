import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useMobileMenuContext } from '../../context/MobileMenuContext';
import { Container, Main } from '../../styled/Utils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MobileMenu from '../MobileMenu/MobileMenu';
import * as S from './Layout.styled';

const query = graphql`
	{
		allStrapiCategory {
			nodes {
				name
			}
		}
	}
`;

interface LayoutProps {
	coloredHeader?: boolean;
	aboutComponent?: ReactNode;
}

const Layout: Component<LayoutProps> = ({
	children,
	coloredHeader,
	aboutComponent,
}) => {
	const [{ isOpen }] = useMobileMenuContext();
	const {
		allStrapiCategory: { nodes: categories },
	} = useStaticQuery(query);

	return (
		<S.Layout mobileMenuOpen={isOpen}>
			<MobileMenu categories={categories} open={isOpen} />
			<Header categories={categories} colored={coloredHeader} />
			{aboutComponent}
			<Main>
				<Container>{children}</Container>
			</Main>
			<Footer />
		</S.Layout>
	);
};

export default Layout;
