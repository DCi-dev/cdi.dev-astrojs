import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

export default function ContactUs() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setLoading(true);
		const isValidFormSchema = z.object({
			firstName: z.string().min(3).max(50),
			lastName: z.string().min(3).max(50),
			email: z.string().email(),
			subject: z.string().min(3).max(50),
			message: z.string().min(3).max(500),
		});

		const isValidForm = isValidFormSchema.safeParse({
			firstName,
			lastName,
			email,
			subject,
			message,
		});

		if (isValidForm.success) {
			const res = await fetch('/api/sendgrid', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					subject,
					message,
				}),
			});

			if (res.status === 200) {
				toast.success('Message Sent ✌!');
				setLoading(false);
				setFirstName('');
				setLastName('');
				setEmail('');
				setSubject('');
				setMessage('');
			} else {
				toast.error('Something went wrong');
				setLoading(false);
			}
		} else {
			toast.error('Please fill all the fields');
			setLoading(false);
		}
	};

	return (
		<>
			<Toaster position='bottom-center' reverseOrder={false} />

			<form
				onSubmit={handleSubmit}
				className='mx-auto flex w-full max-w-xl flex-col items-center dark:text-neutral-300'>
				<p className='px-4 py-11 text-center font-bold text-2xl text-slate-600 dark:text-neutral-300'>
					Or you can send me a good ol&apos; fashioned email if you want.
				</p>
				<div className='grid w-full grid-cols-2 gap-6'>
					<div className='group relative z-0 mb-6 w-full'>
						<input
							type='text'
							name='firstName'
							id='firstName'
							className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2 px-1 text-sm text-neutral-900 focus:border-neutral-1000 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-neutral-100'
							placeholder=' '
							required
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						/>
						<label
							htmlFor='firstName'
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-neutral-1000 dark:text-neutral-400 dark:peer-focus:text-neutral-100'>
							First name
						</label>
					</div>
					<div className='group relative z-0 mb-6 w-full'>
						<input
							type='text'
							name='lastName'
							id='lastName'
							className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2 px-1 text-sm text-neutral-900 focus:border-neutral-1000 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-neutral-100'
							placeholder=' '
							required
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>
						<label
							htmlFor='lastName'
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-neutral-1000 dark:text-neutral-400 dark:peer-focus:text-neutral-100'>
							Last name
						</label>
					</div>
				</div>
				<div className='group relative z-0 mb-6 w-full'>
					<input
						type='email'
						name='email'
						id='email'
						className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2 px-1 text-sm text-neutral-900 focus:border-black focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 focus:dark:border-neutral-100'
						placeholder=' '
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<label
						htmlFor='email'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-neutral-1000 dark:text-neutral-400 dark:peer-focus:text-neutral-100'>
						Email address
					</label>
				</div>
				<div className='group relative z-0 mb-6 w-full'>
					<input
						type='subject'
						name='subject'
						id='subject'
						className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2 px-1 text-sm text-neutral-900 focus:border-neutral-1000 focus:outline-none focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-neutral-100'
						placeholder=' '
						required
						value={subject}
						onChange={(e) => {
							setSubject(e.target.value);
						}}
					/>
					<label
						htmlFor='subject'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-neutral-1000 dark:text-neutral-400 dark:peer-focus:text-neutral-100'>
						Subject
					</label>
				</div>
				<div className='group relative z-0 mb-6 w-full'>
					<textarea
						name='message'
						id='message'
						className='peer mt-2 block min-h-[100px] w-full resize-y appearance-none border-0 border-b-2 border-neutral-300 bg-transparent py-2 px-1 text-sm text-neutral-900 focus:border-neutral-1000 focus:outline-none  focus:ring-0 dark:border-neutral-600 dark:text-neutral-100 dark:focus:border-neutral-100'
						placeholder=' '
						required
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
					<label
						htmlFor='message'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-neutral-1000 dark:text-neutral-400 dark:peer-focus:text-neutral-100'>
						Message
					</label>
				</div>

				<div className='w-full overflow-hidden rounded-lg sm:max-w-sm '>
					<div className='flex w-full justify-center'>
						<button
							type='submit'
							className='relative w-full  overflow-hidden rounded-lg bg-primary-600 px-4 py-3 text-center text-sm font-bold text-neutral-100 outline-none transition duration-300 active:scale-95 '>
							<div className='relative flex w-full items-center justify-center'>
								<p
									className={
										loading ? 'mr-3 inline-flex animate-spin' : 'hidden'
									}></p>
								<p className='text-md  font-bold text-neutral-1000 md:text-lg'>
									{loading ? 'Sending...' : 'Send'}
								</p>
							</div>
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
