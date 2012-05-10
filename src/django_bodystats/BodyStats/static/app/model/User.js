console.log('Loading model.User'),
Ext.define('BodyStats.model.User', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'user',
		type : 'string'
	}, {
		name : 'firstname',
		type : 'string'
	}, {
		name : 'lastname',
		type : 'string'
	}],
	proxy: {
		type: 'ajax',
		url: '/api/v1/user/',
		noCache: false,
		headers: {'accept':'application/json'},
		pageParam: null,
		limitParam: null,
		id: 'userProxy',
		reader: {
			type: 'json',
			root: 'objects',
			idAttribure: 'id'
		}
	}
});

