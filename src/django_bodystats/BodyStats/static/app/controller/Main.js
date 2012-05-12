Ext.define('BodyStats.controller.Main', {
	extend: 'Ext.app.Controller',
	id: 'maincontroller',
	/**
	 * Show login and registration forms in #contentpanel.
	 * To be used when user is NOT authenticated.
	 */
	showLogin: function() {
		var cp = Ext.ComponentQuery.query('#contentpanel')[0]
		cp.removeAll();
		cp.add([{
			xtype: 'panel',
			title: 'User Actions',
			layout: 'accordion',
			items: [
			{
				xtype: 'loginpanel'
			}, {
				xtype: 'registrationpanel'
			}]
		}]);	
	},
	/**
	 *  Shows main app content in #contentpanel. 
	 *  To be used when user is authenticated.
	 */
	showContent: function() {
		var cp = Ext.ComponentQuery.query('#contentpanel')[0];
		cp.removeAll();
		cp.add([
			{
				xtype: 'panel',
				title: 'User Actions',
				layout: 'accordion',
				items: [
				{
					xtype: 'logoutpanel'
				},{
					xtype : 'weightentrypanel'
				}, {
					xtype : 'panel',
					title : 'Weight Chart',
					layout : 'fit',
					items : [{xtype : 'weightchart'}]
				}, {
					xtype : 'bloodpressureentrypanel'
				}, {
					xtype : 'panel',
					title : 'Blood Pressure Chart',
					layout : 'fit',
					items : [{xtype : 'bloodpressurechart'}]
				}
			]
		}]);
	}
});
