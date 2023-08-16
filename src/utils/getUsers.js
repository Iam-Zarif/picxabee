import { getUsersFromDb } from '@/services/users.services';
import { cache } from 'react';

const getUsers = cache(() => {
	return getUsersFromDb();
});

export default getUsers;
