//console.log('Loading model.Weight'),
Ext.define('BodyStats.model.Weight', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'user',
		type : 'string'
	}, {
		name : 'timestamp',
		type : 'date'
	}, {
		name : 'weight',
		type : 'float'
	}],
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

