import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as S from './Header.styled';
import { BiChevronDown, BiMenu, BiMoon, BiSun, BiX } from 'react-icons/bi';
import slugify from 'slugify';
import {
	toggleMenuOpen,
	useMobileMenuContext,
} from '../../context/MobileMenuContext';
import { toggleTheme, useThemeContext } from '../../context/ThemeContext';

interface HeaderProps {
	categories: { name: string }[];
	colored?: boolean;
}

const Header: Component<HeaderProps> = ({ categories, colored }) => {
	const [{ isOpen }, dispatchMenu] = useMobileMenuContext();
	const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
	const [{ theme }, dispatchTheme] = useThemeContext();

	const toggleSubMenuOpen = (): void => {
		setSubMenuOpen(!subMenuOpen);
	};

	const handleToggleTheme = () => {
		dispatchTheme(toggleTheme());
	};

	const handleToggleMenu = () => {
		dispatchMenu(toggleMenuOpen());
	};

	return (
		<S.Header colored={colored}>
			<S.HeaderContent>
				<Link to={`/`}>
					<StaticImage
						src="../../images/fk.svg"
						alt="logo"
						width={100}
						layout="constrained"
						className="logo"
					/>
				</Link>
				<S.HeaderLinkList>
					<S.HeaderLink to={`/all`}>Wszystkie</S.HeaderLink>
					<S.HeaderCategoriesLinkList>
						<S.HeaderLink to={`/category`}>Kategorie</S.HeaderLink>
						<S.HeaderCategoriesButton
							isSubMenuOpen={subMenuOpen}
							onClick={toggleSubMenuOpen}
						>
							<BiChevronDown />
						</S.HeaderCategoriesButton>
						<S.HeaderCategoriesList isOpen={subMenuOpen}>
							{categories.map((category: { name: string }) => (
								<S.HeaderCategoryLink
									key={category.name}
									to={`/category/${slugify(category.name, { lower: true })}`}
								>
									{category.name}
								</S.HeaderCategoryLink>
							))}
						</S.HeaderCategoriesList>
					</S.HeaderCategoriesLinkList>
					<S.HeaderLink to={`/contact`}>Kontakt</S.HeaderLink>
				</S.HeaderLinkList>
				<S.MenuButton onClick={handleToggleMenu}>
					{isOpen ? <BiX /> : <BiMenu />}
				</S.MenuButton>
				<S.ThemeButton onClick={handleToggleTheme}>
					{theme.name === 'light' ? <BiMoon /> : <BiSun />}
				</S.ThemeButton>
			</S.HeaderContent>
		</S.Header>
	);
};

export default Header;
