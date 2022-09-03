export const lightTheme = {
	name: 'light',
	colors: {
		backgroundPrimary: '#fff',
		backgroundSecondary: '#dce2ef',
		backgroundGlass: '#ffffffdf',
		hoverPrimary: '#94a7cc',
		hoverSecondary: '#475a7f',
		pink: '#ea4879',
		fontPrimary: '#000',
		fontSecondary: '#fff',
		fontDescription: '#7c7a7a',
		borderPrimary: '#dfdede',
		shadow: 'rgb(220, 226, 239)',
		backgroundButton: '#5b73a3',
	},
	gradients: {
		toc: `linear-gradient(
			to left,
			rgba(0, 180, 217, 1) 20%,
			rgba(65, 65, 171, 1) 100%
		)`,
	},
};

export const darkTheme = {
	name: 'dark',
	colors: {
		backgroundPrimary: '#242d3f',
		backgroundSecondary: '#3D4D6D',
		backgroundGlass: '#242d3fdf',
		hoverPrimary: '#94a7cc',
		hoverSecondary: '#475a7f',
		pink: '#ea4879',
		fontPrimary: '#fff',
		fontSecondary: '#000',
		fontDescription: '#7c7a7a',
		borderPrimary: '#dfdede',
		shadow: 'rgb(33, 33, 34)',
		backgroundButton: '#5b73a3',
	},
	gradients: {
		toc: `linear-gradient(
			to left,
			#48eac8,
			#00b4d9
		)`,
	},
};
export type CustomTheme = typeof lightTheme;

const size = {
	mobile: '0px',
	tablet: '768px',
	smallDesktop: '1024px',
	desktop: '1400px',
};
export const media = {
	mobile: `@media (min-width: ${size.mobile})`,
	tablet: `@media (min-width: ${size.tablet})`,
	smallDesktop: `@media (min-width: ${size.smallDesktop})`,
	largeDesktop: `@media (min-width: ${size.desktop})`,
};
type Media = {
	media: typeof media;
};
export type StyledTheme = CustomTheme & Media;
