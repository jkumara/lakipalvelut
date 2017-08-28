const keystone = require('keystone')
const Types = keystone.Field.Types

const Service = new keystone.List('Service', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
})

Service.add({
	title: { type: String, required: true, initial: true },
	hidden: { type: Types.Select, options: 'no, yes', default: 'no', index: true, initial: true },
	introduction: {
		brief: { type: Types.Html, wysiwyg: true, height: 150, initial: true },
		extended: { type: Types.Html, wysiwyg: true, height: 400, initial: true },
	}
})

Service.defaultColumns = 'title, hidden'

Service.register()
