Ext.define('BodyStats.model.BloodPressure', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'user',
		type : 'string'
	}, {
		name : 'timestamp',
		type : 'date'
	}, {
		name : 'systolic',
		type : 'float'
	}, {
		name : 'diastolic',
		type : 'float'
	}],
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
			idAttribure: 'timestamp'
		},
		writer: {
			type: 'json',
			root: null,
			encode: false
		}
	}
});

