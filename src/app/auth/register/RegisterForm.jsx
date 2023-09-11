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
			// console.log(data);
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

			<div className='space-y-5 mt-5'>
				<div>
					<a href="#_" class="relative inline-flex items-center justify-start px-10 py-2 overflow-hidden font-medium transition-all border border-primary-color rounded  group">
						<span class="w-48 h-48 rounded rotate-[-40deg] bg-primary-color absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
						<span class="relative w-full text-left text-black transition-colors duration-500 ease-in-out group-hover:text-white">Button Text</span>
					</a>
				</div>

				<div>
					<a href="#_" class="relative px-5 py-2 overflow-hidden font-medium text-primary-color bg-white border border-primary-color shadow-inner group rounded-md">
						<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary-color group-hover:w-full ease rounded-md"></span>
						<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary-color group-hover:w-full ease rounded-md"></span>
						<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary-color group-hover:h-full ease rounded-md"></span>
						<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-primary-color group-hover:h-full ease rounded-md"></span>
						<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary-color rounded-md opacity-0 group-hover:opacity-100"></span>
						<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease rounded-md">Button Text</span>
					</a>
				</div>

				<div>
					
				</div>
			</div>


		</form>
	);
};

export default RegisterForm;
