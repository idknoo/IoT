let userName = process.env.MONGO_INITDB_ROOT_USERNAME;
let password = process.env.MONGO_INITDB_ROOT_PASSWORD;
let database = process.env.MONGO_INITDB_DATABASE;

console.log('Creating users and collections');
db.createUser({
	user: userName,
	pwd: password,
	roles: [
		{
			role: 'readWrite',
			db: database,
		},
		{
			role: 'dbOwner',
			db: database,
		},
	],
});

db.getSiblingDB(database).createCollection('users');
try {
	db.getSiblingDB(database).users.insertMany([
		{ firstname: 'DDD', lastname: 'd', age: 12, email: 'DDD@mail' },
		{ firstname: 'CCC', lastname: 'c', age: 13, email: 'CCC@mail' },
		{ firstname: 'VVV', lastname: 'v', age: 15, email: 'VVV@mail' },
	]);
} catch (e) {
	print(e);
}
