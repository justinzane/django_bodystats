console.log('Loading model.CurrentUser'),
Ext.define('BodyStats.model.CurrentUser', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'username',
		type : 'string'
	}],
	proxy: {
		type: 'ajax',
		url: '/current_user.json',
		noCache: false,
		headers: {'accept':'application/json'},
		pageParam: null,
		limitParam: null,
		id: 'currentUserProxy',
		reader: {
			type: 'json',
			idAttribure: 'id'
		}
	}
});

