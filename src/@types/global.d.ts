import { ReactNode } from 'react';

export {};
declare global {
	export type Component<T = unknown> = React.FC<T & { children?: ReactNode }>;
}
