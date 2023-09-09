// 'use client';
// import useAuth from './useAuth';
// import useSWR from 'swr';


// export const LoggedInUser = () =>{
//     const { user }  = useAuth();
//     console.log("Login user is",user)

 

// 	const fetcher = (...args) => fetch(...args).then((res) => res.json());
// 	const { data, error, isLoading } = useSWR(
// 		`api/loggedInUser?userEmail=${user?.email}`,
// 		fetcher
// 	);

// 	return { data, error, isLoading };
// };



// `api/loggedInUser?userEmail=${user?.email}`;