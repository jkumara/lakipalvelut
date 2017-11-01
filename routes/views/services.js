var keystone = require('keystone')

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res)
	var locals = res.locals
	locals.data = {}

	locals.title = 'Palvelut - Lakipalvelut Kumara'
	
	view.on('init', function(next) {
		keystone.list('Service')
		.model
		.find()
		.where('hidden', 'no')
		.exec(function(err, results) {
			locals.data.services = results
			next(err)
		})
	})
	
	view.render('services')
}
