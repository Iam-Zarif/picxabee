import Link from 'next/link';
import SigninForm from './SigninForm';
import SocialLogin from '@/components/socialLogin/SocialLogin';

const SigninPage = () => {
	return (
		<>
			<div className="my-container h-[100vh] flex flex-col justify-center items-center p-5 lg:p-0">
				<div className="grid lg:grid-cols-3 w-full">
					<div></div>
					<div className="lg:w-3/4">
						<div className="text-center ">
							<h1 className="text-4xl font-semibold">Welcome to Picxabee.</h1>
							<p className="font-semibold">Please enter your details.</p>
						</div>

						<SigninForm />

						<p className="my-5">
							New to Picxabee? Please <Link
								href="/auth/register"
								className="font-semibold text-primary-color"
							> Register
							</Link>.
						</p>

						<SocialLogin />
					</div>
				</div>
			</div>
		</>
	);
};

export default SigninPage;
