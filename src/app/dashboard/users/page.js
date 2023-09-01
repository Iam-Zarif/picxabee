'use client';
import UserRow from '@/components/Dashboard/users/UserRow';
import useSWR from 'swr';
import { DotLoader } from 'react-spinners'

const Users = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: users, error, isLoading } = useSWR('/api/users', fetcher);
	// console.log(users);

	if (error) return <div>failed to load</div>;
	if (isLoading) return ( <div className='mx-auto  '>
		<DotLoader className='mx-auto' size={100} color="#9a45db"   />
	</div>);
	return (
		<div className="w-10/12 mb-60 ml-auto mr-28 glass px-7 pt-8 mt-20 rounded-2xl z-0">
			<div className="border mb-6 w-3/12 text-2xl z-0	 p-2 rounded-md ">
				<h1 className="">Total User: {users?.length}</h1>
			</div>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead className="rounded-md text-base font-semibold bg-gray-400 text-gray-950 text-center">
						<tr>
							<th>*</th>
							<th className="w-3/12">User</th>
							<th>Role</th>
							<th>Joined</th>
							<th>Status</th>
							<th>Edit</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{users &&
							users?.map((user, index) => (
								<UserRow key={user._id} user={user} index={index}></UserRow>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
