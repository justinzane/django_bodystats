Ext.require('Ext.util.Cookies');
Ext.define('BodyStats.store.CurrentUser', {
	extend: 'Ext.data.JsonStore',
	model: 'BodyStats.model.CurrentUser',
	storeId: 'currentUserStore',
	id: 'currentUserStore',
	autoLoad: true
});
Ext.create('BodyStats.store.CurrentUser', {
	proxy: {
		type: 'ajax',
		url: '/current_user.json',
		noCache: false,
		headers: {
			'accept':'application/json',
			'content-type':'application/json',
			"X-CSRFToken": Ext.util.Cookies.get('csrftoken')
		},
		pageParam: null,
		limitParam: null,
		id: 'currentUserProxy',
		reader: {
			type: 'json',
			idAttribute: 'id'
		},
	}
});
console.log('Finished loading store.CurrentUser');
