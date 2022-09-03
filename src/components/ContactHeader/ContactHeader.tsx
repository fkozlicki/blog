import React from 'react';
import * as S from './ContactHeader.styled';

const ContactHeader = () => {
	return (
		<>
			<S.ContactTitle>Pisz śmiało!</S.ContactTitle>
			<S.ContactDescription>
				Jeśli chciałbyś ze mną współpracować lub masz jakieś pytanie, tutaj
				możesz wysłać mi wiadomość.
			</S.ContactDescription>
		</>
	);
};

export default ContactHeader;
