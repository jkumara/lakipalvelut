const keystone = require('keystone');
const Types = keystone.Field.Types;

const Introduction = new keystone.List('Introduction', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	nocreate: true,
	nodelete: true
})

Introduction.add({
	title: { type: String },
	introduction: { type: Types.Html, wysiwyg: true, height: 300 },
	experience: { type: Types.Html, wysiwyg: true, height: 150 }
})

Introduction.defaultColumns = 'name'

Introduction.register()
