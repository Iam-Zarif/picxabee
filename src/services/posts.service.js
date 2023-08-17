import DBConnect from "./DBConnects";

export const getPostsFromDb = async () => {
	const db = await DBConnect();
	const postsCollection = db.collection('posts');
	return postsCollection.find({}).toArray();
};
