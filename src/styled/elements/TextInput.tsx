import styled from 'styled-components';

export default styled.input<{ textarea?: boolean }>`
	width: 100%;
	background: none;
	border: none;
	outline: none;
	padding: 16px;
	padding-left: 30px;
	border-radius: 100px;
	box-shadow: 0px 6px 25px 4px ${({ theme: { colors } }) => colors.shadow};
	margin-bottom: 30px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
	resize: none;
	border-radius: 25px;
	position: relative;
	overflow-x: hidden;

	height: ${({ textarea }) => textarea && '250px'};

	::placeholder {
		color: ${({ theme: { colors } }) => colors.fontDescription};
	}

	:focus {
		box-shadow: 0px 10px 15px 2px ${({ theme: { colors } }) => colors.shadow};
	}
`;
