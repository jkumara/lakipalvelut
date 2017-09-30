const keystone = require('keystone')
const Types = keystone.Field.Types

const Price = new keystone.List('Price', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
})

Price.add({
	title: { type: String, required: true, initial: true },
	pricing: { type: String, required: true, initial: true },
	icon: { type: String, options: 'euro, car, scales', default: 'euro', initial: true },
	hidden: { type: Types.Select, options: 'no, yes', default: 'no', index: true, initial: true }
})

Price.defaultColumns = 'title, pricing|20%, extraDetails|20%, hidden|20%'

Price.register()
