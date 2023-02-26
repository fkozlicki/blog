import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactHeader from '../components/ContactHeader/ContactHeader';
import Layout from '../components/Layout/Layout';

const Contact = () => {
	return (
		<Layout>
			<ContactHeader />
			<ContactForm />
		</Layout>
	);
};

export default Contact;
