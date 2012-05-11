Ext.define('BodyStats.view.LogoutPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.logoutpanel',
	title: 'Logout',
	layout: 'anchor',
	buttons: [{
		text: 'Logout',
		alias: 'widget.logoutbutton',
		handler: function(){
			console.log('logoutbutton pressed.');
			Ext.Ajax.request({
			    url: '/logout.json',
			    params: null,
			    success: function(response){
			        var text = response.responseText;
			        console.log(text);
			    }
			});
		}
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
})
