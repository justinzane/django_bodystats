Ext.define('BodyStats.store.User', {
	extend: 'Ext.data.Store',
	model: 'BodyStats.model.User',
	storeId: 'userStore',
	autoLoad: true,
	autoSync: true
});
Ext.create('BodyStats.store.User', {
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
