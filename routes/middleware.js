/**
	Initialises the standard view locals
*/
exports.initLocals = (req, res, next) => {
	res.locals.navLinks = [
		{ label: 'Esittely', key: 'introduction', href: '/#esittely' },
		{ label: 'Palvelut', key: 'services', href: '/#palvelut' },
		{ label: 'Hinnasto', key: 'prices', href: '/#hinnasto' },
		{ label: 'Ota yhteyttä', key: 'contact', href: '/#ota-yhteytta' }
	]
	res.locals.user = req.user
	next()
}

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = (req, res, next) => {
	if (!req.user) {
		res.redirect('/keystone/signin')
	} else {
		next()
	}
}
