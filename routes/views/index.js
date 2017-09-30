var keystone = require('keystone')

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res)
	var locals = res.locals
	locals.data = {}
	
	view.on('init', function(next) {
		keystone.list('Introduction')
		.model
		.find()
		.exec(function(err, results) {
			locals.data.introduction = results[0]
			next(err)
		})
	})

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
	
	view.on('init', function(next) {
		keystone.list('Price')
		.model
		.find()
		.where('hidden', 'no')
		.exec(function(err, results) {
			locals.data.prices = results
			next(err)
		})
	})
	
	view.render('index')
}
