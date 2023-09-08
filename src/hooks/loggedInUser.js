'use client';
import useFetchData from './useFetchData';
import useAuth from './useAuth';


export const LoggedInUser = () =>{
    const { user } = useAuth();
    console.log("Login user is",user)

    const {
			data,
			error,
			isLoading,
		} = useFetchData(`api/loggedInUser?userEmail=${user?.email}`);
        console.log(data)
return data ;

}