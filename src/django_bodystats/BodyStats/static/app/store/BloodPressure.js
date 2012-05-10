Ext.define('BodyStats.store.BloodPressure', {
	extend: 'Ext.data.JsonStore',
	model: 'BodyStats.model.BloodPressure',
	storeId: 'bloodpressureStore',
	id: 'bloodpressureStore',
	autoLoad: true,
	autoSync: true,
	pageSize: 1000
});
Ext.create('BodyStats.store.BloodPressure', {
	proxy: {
		type: 'ajax',
		url: '/api/v1/bloodpressure/',
		noCache: false,
		headers: {
			'accept':'application/json',
			'content-type':'application/json'
			},
		pageParam: null,
		limitParam: null,
		id: 'bloodpressureProxy',
		reader: {
			type: 'json',
			root: 'objects',
			idAttribure: 'id'
		},
		writer: {
			type: 'json',
			root: null,
			encode: false
		}
	}
});
console.log('Finished loading store.BloodPressure');
