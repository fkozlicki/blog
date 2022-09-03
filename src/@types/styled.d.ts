import 'styled-components';
import { StyledTheme } from '../styled/Themes';

declare module 'styled-components' {
	export interface DefaultTheme extends StyledTheme {}
}
