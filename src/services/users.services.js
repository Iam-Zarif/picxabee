
import DBConnect from "./DBConnects";

export const getUsersFromDb = async () => {
	const db = await DBConnect();
	const usersCollection = db.collection('users');
	return usersCollection.find({}).toArray();
};
