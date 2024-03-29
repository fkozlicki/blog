import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactHeader from '../components/ContactHeader/ContactHeader';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const Contact = () => {
	return (
		<Layout>
			<ContactHeader />
			<ContactForm />
		</Layout>
	);
};

export const Head = () => <SEO title="Filip Kozlicki | Contact" />;

export default Contact;
