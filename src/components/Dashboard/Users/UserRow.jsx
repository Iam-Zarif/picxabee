import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const UserRow = ({ user, index }) => {

// This is done by zarif, it can be updated by the author
	
// This is done by zarif, it can be updated by the author

	const date1 = new Date(user.createdAt);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDateTime = date1.toLocaleString(undefined, options);

	const handlerUserStatus = (user) => {
		fetch(`/api/users?id=${user._id}`, {
			method: 'PATCH',
		})
			.then((res) => res.json())
			.then((data) => toast.success('updated user role'));
	};
	return (
		<>
			<tr className="text-base text-left">
				<th> {index + 1}</th>
				<td>{user.name}</td>
				<td>{user?.email}</td>
				<td>{formattedDateTime}</td>
				<td>Active</td>
				<td className="capitalize">{user?.role}</td>
				<td>
					<details className="dropdown">
						<summary className="cursor-pointer capitalize">
							{user?.role}
						</summary>
						<ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-400 bg-opacity-80 rounded-md cursor-pointer">
							<li onClick={() => handlerUserStatus(user)}>Admin</li>
							<li>
								User
							</li>
						</ul>
					</details>
				</td>
			</tr>
		</>
	);
};

export default UserRow;
