'use client';

import UserRow from '@/components/Dashboard/Users/UserRow';
import Loading from '../activities/loading';
import useFetchData from '@/hooks/useFetchData';

const UserPage = () => {
    
    const { data: users, error, isLoading } = useFetchData('/api/users')

    if (error) return <div>failed to load</div>;
    if (isLoading)
        return (
            <div className="mx-auto  flex justify-center items-center pt-40">
                <Loading />
            </div>
        );

    return (
        <div className="w-10/12 ml-auto mr-28 pt-8">
            <div className="border mb-3 w-3/12 text-2xl z-0	 p-2 rounded-md ">
                <h1 className="">Total User: {users?.length}</h1>
            </div>
            <div className="w-full mb-60 ml-auto mr-28 glass mt-16 rounded-2xl z-0">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="rounded-md text-base font-semibold bg-gray-400 text-gray-950 text-left">
                            <tr>
                                <th>*</th>
                                <th className="w-3/12">User</th>
                                <th className="w-3/12">email</th>
                                <th>Joined</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {users &&
                                users.reverse().map((user, index) => (
                                    <UserRow key={user._id} user={user} index={index}></UserRow>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserPage;