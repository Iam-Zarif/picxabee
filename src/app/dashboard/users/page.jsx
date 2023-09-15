'use client';
import useSWR from 'swr';
import Form from 'react-bootstrap/Form';
import UserRow from '@/components/Dashboard/Users/UserRow';
import Loading from '../activities/loading';
import useFetchData from '@/hooks/useFetchData';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';
import { TbUserSearch } from 'react-icons/tb';
import UserRowForSm from '@/components/Dashboard/Users/UserRowForSm';

const UserPage = () => {
	// Sorry to interrupt - from Zarifff
	const [Search, setSearch] = useState('');
	//   const { data: users, error, isLoading } = useFetchData("/api/users");

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: users,
		error,
		isLoading,
	} = useSWR('/api/users', fetcher, {
		refreshInterval: 1000,
	});

	if (error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div className="mx-auto  flex justify-center items-center pt-40">
				<Loading />
			</div>
		);

	return (
		<div className="w-10/12 ml-auto lg:mr-24 pt-8">
			<div className="lg:flex lg:justify-between ">
				<div className="relative">
					<form>
						<InputGroup className="mb-3">
							<Form.Control
								onChange={(e) => setSearch(e.target.value)}
								placeholder="User's name"
								className="text-xl  pl-10 w-[200px] lg:w-fit mr-auto   rounded-2xl pr-2 py-2 border-1 border border-gray shadow-slate-300 hover:shadow-md hover:shadow-slate-400  focus:border-transparent focus:outline-dotted"
							/>
						</InputGroup>
					</form>
					<TbUserSearch size={26} className="absolute top-2 left-2" />
				</div>
				<div>
					<h1 className="w-48 border rounded-md px-4 py-2 text-xl">
						<span className="font-bold">Total Users </span> : {users?.length}
					</h1>
				</div>
			</div>

			<div className="w-full mb-60 ml-auto mr-24 glass mt-16 rounded-md z-0">
				<div>
					{/* className="overflow-x-auto" */}
					<table className="table hidden lg:block mx-8 lg:mx-0">
						{/* head */}
						<thead className="rounded-md text-base font-semibold bg-gray-400 bg-opacity-30 text-gray-950 text-left">
							<tr>
								<th>*</th>
								<th className="w-3/12">User</th>
								<th className="w-3/12 ">email</th>
								<th>Joined</th>
								{/* <th>Status</th> */}
								<th>Role</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}

							{users &&
								users
									.reverse()
									.filter((user) => {
										return Search.toLowerCase() === ''
											? user
											: user.name.toLowerCase().includes(Search);
									})
									.map((user, index) => (
										<UserRow key={user._id} user={user} index={index}></UserRow>
									))}
						</tbody>
					</table>

					<table className="table lg:hidden">
						{/* head */}
						<thead className="rounded-md text-base font-semibold bg-gray-400 bg-opacity-30 text-gray-950 text-left">
							<tr>
								<th>*</th>
								<th className="w-6/12">User</th>
								<th className="w-6/12 ">Details</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}

							{users &&
								users
									.reverse()
									.filter((user) => {
										return Search.toLowerCase() === ''
											? user
											: user.name.toLowerCase().includes(Search);
									})
									.map((user, index) => (
										<UserRowForSm
											key={user._id}
											user={user}
											index={index}
										></UserRowForSm>
									))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
