// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config()

// Require keystone
const keystone = require('keystone')

keystone.init({
	'name': 'lakipalvelut-kumara',
	'brand': 'lakipalvelut-kumara',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/app-icons/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	'wysiwyg menubar': true,
	'wysiwyg skin': 'lightgray',
	'wysiwyg additional plugins': 'autosave, advlist, searchreplace, textcolor, media, image',
	'wysiwyg additional buttons': 'forecolor backcolor, image media, searchreplace'
})

keystone.import('models')

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
})

keystone.set('routes', require('./routes'))

keystone.set('nav', {
	introduction: 'Introduction',
	catalog: ['services', 'prices'],
	users: 'users'
})

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}

keystone.start()
