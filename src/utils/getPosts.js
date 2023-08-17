import { getPostsFromDb } from '@/services/posts.service';
import { cache } from 'react';

const getPosts = cache(() => {
	return getPostsFromDb();
});

export default getPosts;
