import React from 'react';
import * as S from './ContactHeader.styled';

const ContactHeader = () => {
	return (
		<>
			<S.ContactTitle>Feel free to message me</S.ContactTitle>
			<S.ContactDescription>
				If you want to ask me a question, you can do it here ⬇️
			</S.ContactDescription>
		</>
	);
};

export default ContactHeader;
