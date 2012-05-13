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
			    success: Ext.Function.defer(BodyStats.util.Util.checkLogin, 1500),
				failure: function(){
					Ext.MessageBox.alert("Logout failed.", "Check network connection.")
				}
			});
		}, //end handler
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
})
