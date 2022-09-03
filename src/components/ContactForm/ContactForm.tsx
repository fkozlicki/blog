import React, { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import * as S from './ContactForm.styled';
import { useThemeContext } from '../../context/ThemeContext';

interface IFormInputs {
	name: string;
	email: string;
	message: string;
}

const schema = yup
	.object({
		name: yup.string().required('Te pole jest wymagane'),
		email: yup
			.string()
			.email('To nie jest właściwy email')
			.required('Te pole jest wymagane'),
		message: yup
			.string()
			.required('Te pole jest wymagane')
			.max(300, 'Wiadomość może mieć maksymalnie 300 znaków'),
	})
	.required();

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		clearErrors,
		reset,
		watch,
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});
	const messageLength = watch('message')?.length ?? 0;
	const [{ theme }] = useThemeContext();

	const onSubmit = async (data: IFormInputs) => {
		const mailData = {
			name: data.name,
			from: data.email,
			message: data.message,
		};

		const postMessage = axios.post('http://localhost:3000/contact', mailData, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		await toast.promise(postMessage, {
			loading: 'Trwa wysyłanie...',
			success: 'Wysłano pomyślnie.',
			error: 'Coś poszło nie tak. Spróbuj ponownie.',
		});
	};

	useEffect(() => {
		reset();
	}, [isSubmitSuccessful]);

	return (
		<S.ContactForm onSubmit={handleSubmit(onSubmit)}>
			<Toaster
				toastOptions={{
					style: {
						background: theme.colors.backgroundPrimary,
						color: theme.colors.fontPrimary,
					},
				}}
			/>
			<S.ContactFormInputWrapper>
				<S.ContactFormName
					type="text"
					{...register('name')}
					placeholder="Imię"
				/>
				<S.ContactFormError>{errors.name?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormInputWrapper>
				<S.ContactFormEmail
					type="email"
					{...register('email')}
					onChange={() => clearErrors('email')}
					placeholder="Email"
				/>
				<S.ContactFormError>{errors.email?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormInputWrapper>
				<S.ContactFormMessageWrapper>
					<S.ContactFormMessage
						{...register('message')}
						placeholder="Wiadomość"
					/>
					<S.ContactFormCounter>{messageLength} / 300</S.ContactFormCounter>
				</S.ContactFormMessageWrapper>
				<S.ContactFormError>{errors.message?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormButton type="submit">Wyślij</S.ContactFormButton>
		</S.ContactForm>
	);
};

export default ContactForm;
