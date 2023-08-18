import getUsers from '@/utils/getUsers';
import React from 'react';

const UsersPage = async() => {
    const users = await getUsers();
    return (
			<div>
				<h1>USERS</h1>
				<div>
					{users.map((user) => (
						<p key={users._id}>{user.name}</p>
					))}
				</div>
			</div>
		);
};

export default UsersPage;