'use client';
import useAuth from './useAuth';
import useSWR from 'swr';

const useCurrentUser = () => {
	const { user } = useAuth();
	const email = user?.email || '';
	

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: loggedInUser,
		error,
		isLoading,
	} = useSWR(`/api/loggedInUser?userEmail=${email}`, fetcher);

	// console.log(loggedInUser);
  

	return { loggedInUser, error, isLoading };
};
export default useCurrentUser;