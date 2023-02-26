import styled, { css } from 'styled-components';

export const ContactForm = styled.form`
	padding: 4rem 0;
`;

export const ContactFormInputWrapper = styled.div`
	position: relative;
`;

const ContactFormInput = css`
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

	::placeholder {
		color: ${({ theme: { colors } }) => colors.fontPrimary};
	}

	:focus {
		box-shadow: 0px 10px 15px 2px ${({ theme: { colors } }) => colors.shadow};
	}
`;

export const ContactFormMessageWrapper = styled.div`
	position: relative;
`;

export const ContactFormCounter = styled.span`
	position: absolute;
	display: block;
	right: 18px;
	bottom: ${30 + 5}px;
	font-size: 12px;
	background: inherit;
	padding: 2px 0 0 2px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;

export const ContactFormButton = styled.button`
	width: 100%;
	background: ${({ theme: { colors } }) => colors.backgroundButton};
	padding: 13px;
	border-radius: 100px;
	color: white;
	box-shadow: 0px 6px 25px 4px ${({ theme: { colors } }) => colors.shadow};
	transition: background 0.2s ease-in-out;

	:hover {
		background: ${({ theme }) => theme.colors.hoverSecondary};
	}
`;

export const ContactFormError = styled.p`
	position: absolute;
	bottom: 6px;
	left: 25px;
	color: ${({ theme: { colors } }) => colors.pink};
	font-size: 14px;
`;
