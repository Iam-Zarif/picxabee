'use client';
import useAuth from './useAuth';
import useSWR from 'swr';

const useLoggedInUser = () => {
	const { user } = useAuth();
	const email = user?.email || ''; undefined

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error, isLoading } = useSWR(
		`/api/loggedInUser?userEmail=${email}`, 
		fetcher
	);

	console.log(data);

	return { data, error, isLoading };
};
export default useLoggedInUser;

// `api/loggedInUser?userEmail=${user?.email}`;
