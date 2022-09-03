import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import React, {
	createContext,
	Dispatch,
	Reducer,
	useContext,
	useEffect,
	useReducer,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { CustomTheme, darkTheme, lightTheme, media } from '../styled/Themes';

/* ------------------------TYPES------------------------ */
type ThemeContextData = {
	theme: CustomTheme;
};

const DefaultThemeContextData: ThemeContextData = {
	theme: lightTheme,
};

type ThemeContextType = [ThemeContextData, Dispatch<AnyAction>];

/* ------------------------REDUX------------------------ */
const ThemeSlice = createSlice({
	name: 'theme',
	reducers: {
		setTheme: (state, action: PayloadAction<CustomTheme>) => {
			state.theme = action.payload;
		},
		toggleTheme: (state) => {
			if (state.theme.name === 'light') {
				state.theme = darkTheme;
			} else {
				state.theme = lightTheme;
			}
			localStorage.setItem('theme', JSON.stringify(state.theme.name));
		},
	},
	initialState: DefaultThemeContextData,
});

export const { setTheme, toggleTheme } = ThemeSlice.actions;

/* ------------------------CONTEXT------------------------ */
export const ThemeContext = createContext<ThemeContextType>([
	DefaultThemeContextData,
	() => null,
]);

export const ThemeContextProvider: Component = ({ children }) => {
	const [state, dispatch] = useReducer<Reducer<ThemeContextData, AnyAction>>(
		ThemeSlice.reducer,
		DefaultThemeContextData
	);

	useEffect(() => {
		if (localStorage.getItem('theme')) {
			const currentTheme = JSON.parse(localStorage.getItem('theme') || '');
			if (currentTheme === 'light') {
				dispatch(setTheme(lightTheme));
			} else if (currentTheme === 'dark') {
				dispatch(setTheme(darkTheme));
			}
		}
	}, []);

	return (
		<ThemeContext.Provider value={[state, dispatch]}>
			<ThemeProvider theme={{ ...state.theme, media }}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export function useThemeContext() {
	return useContext(ThemeContext);
}
