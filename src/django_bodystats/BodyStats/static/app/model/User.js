console.log('Loading model.User'),
Ext.define('BodyStats.model.User', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'username',
		type : 'string'
	}, {
		name : 'firstName',
		type : 'string'
	}, {
		name : 'lastName',
		type : 'string'
	}, {
		name : 'email',
		type : 'string'
	}, {
		name : 'lastLogin',
		type : 'date'
	}, {
		name : 'dateJoined',
		type : 'date'
	}],
	hasMany: [
		'BodyStats.model.Weight',
		'BodyStats.model.BloodPressure'
	],
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

