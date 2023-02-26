import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import slugify from 'slugify';
import { toggleTheme, useThemeContext } from '../../context/ThemeContext';
import * as S from './MobileMenu.styled';

interface MobileMenuProps {
	open: boolean;
	categories: { name: string }[];
}

const MobileMenu: Component<MobileMenuProps> = ({ open, categories }) => {
	const [{ theme }, dispatchTheme] = useThemeContext();

	const handleToggleTheme = () => {
		dispatchTheme(toggleTheme());
	};

	return (
		<S.MobileMenu open={open}>
			<S.MobileMenuContentWrapper>
				<S.MobileMenuContent>
					<div>
						<S.MobileMenuLink to="/">Home</S.MobileMenuLink>
						<S.MobileMenuLink to="/all">All</S.MobileMenuLink>
						<S.MobileMenuLink to="/category">Categories</S.MobileMenuLink>
						{categories.map((category) => (
							<S.MobileMenuLink
								to={`/category/${slugify(category.name, { lower: true })}`}
								key={category.name}
								$isCategory={true}
							>
								{category.name}
							</S.MobileMenuLink>
						))}
						<S.MobileMenuLink to="/contact">Contact</S.MobileMenuLink>
					</div>
					<S.ThemeButton onClick={handleToggleTheme}>
						{theme.name === 'light' ? <BiMoon /> : <BiSun />}
					</S.ThemeButton>
				</S.MobileMenuContent>
			</S.MobileMenuContentWrapper>
		</S.MobileMenu>
	);
};

export default MobileMenu;
