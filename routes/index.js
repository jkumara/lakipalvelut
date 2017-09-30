const keystone = require('keystone')
const middleware = require('./middleware')
const importRoutes = keystone.importer(__dirname)

// Common Middleware
keystone.pre('routes', middleware.initLocals);

// Import Route Controllers
const routes = {
	views: importRoutes('./views')
}

// Setup Route Bindings
exports = module.exports = app => {
	// Views
	app.get('/', routes.views.index)
	app.get('/:palvelut', routes.views.services);
}
