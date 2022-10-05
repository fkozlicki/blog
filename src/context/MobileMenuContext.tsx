import { AnyAction, createSlice } from '@reduxjs/toolkit';
import React, {
	createContext,
	Dispatch,
	PropsWithChildren,
	Reducer,
	useContext,
	useReducer,
} from 'react';

/* ------------------------TYPES------------------------ */
type MobileMenuContextData = {
	isOpen: boolean;
};

const DefaultMobileMenuContextData: MobileMenuContextData = {
	isOpen: false,
};

type MobileMenuContextType = [MobileMenuContextData, Dispatch<AnyAction>];

/* ------------------------REDUX------------------------ */
const MobileMenuSlice = createSlice({
	name: 'MobileMenu',
	reducers: {
		toggleMenuOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
	initialState: DefaultMobileMenuContextData,
});
export const { toggleMenuOpen } = MobileMenuSlice.actions;

/* ------------------------CONTEXT------------------------ */
export const MobileMenuContext = createContext<MobileMenuContextType>([
	DefaultMobileMenuContextData,
	() => null,
]);

export const MobileMenuContextProvider: Component<PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer<
		Reducer<MobileMenuContextData, AnyAction>
	>(MobileMenuSlice.reducer, DefaultMobileMenuContextData);

	return (
		<MobileMenuContext.Provider value={[state, dispatch]}>
			{children}
		</MobileMenuContext.Provider>
	);
};

export function useMobileMenuContext(): MobileMenuContextType {
	return useContext(MobileMenuContext);
}
