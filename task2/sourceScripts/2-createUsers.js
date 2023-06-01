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
		{
			_id: 1,
			firstname: 'DDD',
			lastname: 'd',
			age: 0,
			email: 'DDD@mail',
		},
		{
			_id: 2,
			firstname: 'VVV',
			lastname: 'v',
			age: 1,
			email: 'VVV@mail',
		},
		{
			_id: 3,
			firstname: 'XXX',
			lastname: 'x',
			age: 2,
			email: 'XXX@mail',
		},
		{
			_id: 4,
			firstname: 'AAA',
			lastname: 'a',
			age: 3,
			email: 'AAA@mail',
		},
	]);
} catch (e) {
	print(e);
}
