import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import * as S from './ContactForm.styled';
import { useThemeContext } from '../../context/ThemeContext';
import TextInput from '../../styled/elements/TextInput';

interface IFormInputs {
	name: string;
	email: string;
	message: string;
}

const schema = yup
	.object({
		name: yup.string().required('This field is required'),
		email: yup
			.string()
			.email('This is not right email')
			.required('This field is required'),
		message: yup
			.string()
			.required('This field is required')
			.max(300, 'Message can contain only 300 digits'),
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
	const { message } = watch();
	const [{ theme }] = useThemeContext();
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = async (data: IFormInputs) => {
		setLoading(true);
		const mailData = {
			name: data.name,
			from: data.email,
			message: data.message,
		};

		const postMessage = axios.post(
			`${process.env.GATSBY_API_URL}/contact`,
			mailData,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		await toast.promise(postMessage, {
			loading: 'Sending...',
			success: 'Sent successfully',
			error: 'Something went wrong. Try again.',
		});

		setLoading(false);
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
				<TextInput type="text" {...register('name')} placeholder="John Doe" />
				<S.ContactFormError>{errors.name?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormInputWrapper>
				<TextInput
					type="email"
					{...register('email')}
					onChange={() => clearErrors('email')}
					placeholder="johndoe@example.com"
				/>
				<S.ContactFormError>{errors.email?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormInputWrapper>
				<S.ContactFormMessageWrapper>
					<TextInput
						textarea
						as="textarea"
						{...register('message')}
						placeholder="Hi Filip, how are you..."
					/>
					<S.ContactFormCounter>
						{message?.length ?? 0} / 300
					</S.ContactFormCounter>
				</S.ContactFormMessageWrapper>
				<S.ContactFormError>{errors.message?.message}</S.ContactFormError>
			</S.ContactFormInputWrapper>
			<S.ContactFormButton type="submit" disabled={loading}>
				Send
			</S.ContactFormButton>
		</S.ContactForm>
	);
};

export default ContactForm;
