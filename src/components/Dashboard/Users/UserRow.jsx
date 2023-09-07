import React from 'react';
import Link from 'next/link'

const UserRow = ({ user, index }) => {
	// console.log(user);

	const date1 = new Date(user.createdAt);
	// const options = { dateStyle: 'long', timeStyle: 'medium' };
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDateTime = date1.toLocaleString(undefined, options);

	const handlerUserStatus = (user) => {

		fetch(`/api/users?id=${user._id}`, {
			method: "PATCH",
		})
			.then(res => res.json())
			.then(data => alert('updated user role'))
	}
	return (
		<>
			<tr className="text-base text-left">
				<th> {index + 1}</th>
				<td>{user.name}</td>
				<td>{user?.email}</td>
				{/* <td>User</td> */}
				<td>{formattedDateTime}</td>
				<td>Active</td>
				<td>{user?.role}</td>
				<td>
					<details className="dropdown">
						<summary className="">User</summary>
						<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md">
							<li onClick={() => handlerUserStatus(user)}>
								Admin
							</li>
							<li >
								<a>User</a>
							</li>
						</ul>
					</details>
				</td>
			</tr>
		</>
	);
};

export default UserRow;
