import React from 'react';

const UserRow = ({ user, index }) => {
	// console.log(user);

	const date1 = new Date(user.createdAt);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDateTime = date1.toLocaleString(undefined, options);
	return (
		<>
			<tr className="text-base text-center">
				<th>{index + 1}</th>
				<td>{user.name}</td>
				<td>{user.role}</td>
				<td>{formattedDateTime}</td>
				<td>
					<button className="btn btn-sm bg-green-400 hover:bg-primary text-xs capitalize">
						Active
					</button>
				</td>
				<td>
					<details className="dropdown">
						<summary className="">{user.role}</summary>
						<ul className="p-2 shadow menu dropdown-content z-[1] bg-gray rounded-md">
							<li>
								<a>Admin</a>
							</li>
							<li>
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
