'use client';
import AuthContext from '@/context/AuthContext';
import { db, storage } from '@/firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {

	const { createUser } = useContext(AuthContext);
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset
	} = useForm();

	const uploadImage = async (event) => {
		const formData = new FormData();
		if (!event.target.files[0]) return;
		formData.append("image", event.target.files[0]);

		try {
			const res = await fetch(
				`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_STOREIMG}`,
				{
					method: "POST",
					body: formData,
				}
			);
			if (!res.ok) throw new Error("Failed to upload image");

			const data = await res.json();
			setValue("photoURL", data.data.url);

		} catch (error) {
			console.log(error);
		}
	}

	const onSubmit = async (data) => {

		const { name, email, password, photoURL } = data;

		try {
			const res = await createUser(email, password);
			const storageRef = ref(storage, name);


			const response = await fetch(photoURL);
			const blob = await response.blob();
			const uploadTask = uploadBytesResumable(storageRef, blob);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// You can track the upload progress here if needed
				},
				(error) => {
					console.error(error);
				},
				async () => {
					try {
						const downloadURL = await getDownloadURL(uploadTask?.snapshot.ref);
						await setDoc(doc(db, 'users', res?.user.uid), {
							uid: res.user.uid,
							displayName: name,
							email,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, 'userChats', res?.user.uid), {});
						await updateProfile(res.user, {
							displayName: name,
							photoURL: downloadURL,
						});

						reset()

						await fetch('/api/users', {
							method: 'POST',
							body: JSON.stringify({
								name,
								email,
								bio: '',
								profile_picture: photoURL || '',
								role: 'user',

							}),
						});
						router.push('/')
					} catch (error) {
						console.log(error);
					}
				}
			);
		} catch (error) {
			console.log('Signup Failed', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-8 ">
			{/* Name Input */}
			<input
				type="name"
				name="name"
				placeholder="Name"
				{...register('name', { required: true })}
				className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${errors.name ? 'border-red focus:border-red focus:outline-red' : ''
					}`}
			/>
			{errors.name?.type === 'required' && (
				<span className="text-red font-semibold">Name is required</span>
			)}

			{/* Email Input */}
			<input
				type="email"
				name="email"
				placeholder="Email"
				{...register('email', {
					required: true,
					pattern:
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
				className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${errors.email ? 'border-red focus:border-red focus:outline-red' : ''
					}`}
			/>
			{errors.email?.type === 'required' && (
				<span className="text-red font-semibold">Email is required</span>
			)}
			{errors.email?.type === 'pattern' && (
				<span className="text-red font-semibold">
					Email address is not validated
				</span>
			)}

			{/* Password Input */}
			<input
				type="password"
				name="password"
				placeholder="Password"
				{...register('password', {
					required: true,
					// pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
				})}
				className={`block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent ${errors.password ? 'border-red focus:border-red focus:outline-red' : ''
					}`}
			/>
			{errors.password?.type === 'required' && (
				<span className="text-red font-semibold">Password is required</span>
			)}
			{/* {errors.password?.type === 'pattern' && (
				<span className="text-red font-semibold">
					Password will be 1 number, 1 Capital and 1 special character
				</span>
			)}
			 */}
			<input onChange={uploadImage} type="file" className="block mt-3 p-3 border border-primary-color outline-primary-color rounded-md w-full bg-transparent" required />

			<input type="submit" className="bg-primary-color border border-primary-color hover:text-primary-color duration-300 hover:bg-transparent w-full text-white rounded-md p-3 cursor-pointer mt-3" />
		</form>
	);
};

export default RegisterForm;
