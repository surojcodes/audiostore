const bcrypt = require('bcryptjs')
const users = [
	{
		name: 'Admin',
		email: 'admin@ashop.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: true,
	},
	{
		name: 'Rose Williams',
		email: 'rose@ashop.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: false,
	},
	{
		name: 'Raj Shrestha',
		email: 'raj@ashop.com',
		password: bcrypt.hashSync('123456'),
		isAdmin: false,
	},
]
module.exports = users
