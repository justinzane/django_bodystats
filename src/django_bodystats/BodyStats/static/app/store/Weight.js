Ext.define('BodyStats.store.Weight', {
	extend: 'Ext.data.JsonStore',
	model: 'BodyStats.model.Weight',
	storeId: 'weightStore',
	id: 'weightStore',
	autoLoad: true,
	autoSync: true,
	pageSize: 1000
});
Ext.create('BodyStats.store.Weight', {
	proxy: {
		type: 'ajax',
		url: '/api/v1/weight/',
		noCache: false,
		headers: {
			'accept':'application/json',
			'content-type':'application/json'
			},
		pageParam: null,
		limitParam: null,
		id: 'weightProxy',
		reader: {
			type: 'json',
			root: 'objects',
			idAttribute: 'timestamp'
		},
		writer: {
			type: 'json',
			root: null,
			encode: false
		}
	}
});
console.log('Finished loading store.Weight');
