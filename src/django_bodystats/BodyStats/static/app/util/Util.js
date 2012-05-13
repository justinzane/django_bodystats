Ext.define('BodyStats.util.Util', {
	extend: 'Ext.Base',
	id: 'util',
	statics: {
		/**
		 * Show login and registration forms in #contentpanel.
		 * To be used when user is NOT authenticated.
		 *  Note: need to doComponentLayout after show for each component.
		 */
		showLogin: function() {
			Ext.ComponentQuery.query('logoutpanel')[0].hide();
			Ext.ComponentQuery.query('weightentrypanel')[0].hide();
			Ext.ComponentQuery.query('#weightchartpanel')[0].hide();
			Ext.ComponentQuery.query('bloodpressureentrypanel')[0].hide();
			Ext.ComponentQuery.query('#bloodpressurechartpanel')[0].hide();
			Ext.ComponentQuery.query('loginpanel')[0].show();
			Ext.ComponentQuery.query('loginpanel')[0].doComponentLayout();
			Ext.ComponentQuery.query('registrationpanel')[0].show();
			Ext.ComponentQuery.query('registrationpanel')[0].doComponentLayout();
		}, // end showLogin
		/**
		 *  Shows main app content in #contentpanel. 
		 *  To be used when user is authenticated.
		 *  Note: need to doComponentLayout after show for each component.
		 */
		showContent: function() {
			Ext.ComponentQuery.query('loginpanel')[0].hide();
			Ext.ComponentQuery.query('registrationpanel')[0].hide();
			Ext.ComponentQuery.query('logoutpanel')[0].show();
			Ext.ComponentQuery.query('weightentrypanel')[0].show();
			Ext.ComponentQuery.query('#weightchartpanel')[0].show();
			Ext.ComponentQuery.query('bloodpressureentrypanel')[0].show();
			Ext.ComponentQuery.query('#bloodpressurechartpanel')[0].show();
			Ext.ComponentQuery.query('logoutpanel')[0].doComponentLayout();
			Ext.ComponentQuery.query('weightentrypanel')[0].doComponentLayout();
			Ext.ComponentQuery.query('#weightchartpanel')[0].doComponentLayout();
			Ext.ComponentQuery.query('bloodpressureentrypanel')[0].doComponentLayout();
			Ext.ComponentQuery.query('#bloodpressurechartpanel')[0].doComponentLayout();
		}, //end showContent
		/**
		 * Created the contents of #contentpanel
		 */
		createContent: function() {
			var cp = Ext.ComponentQuery.query('#contentpanel')[0]
			cp.removeAll();
			cp.add([{
				xtype: 'panel',
				title: 'User Actions',
				layout: 'accordion',
				items: [{
					xtype: 'loginpanel',
					hidden: true
				}, {
					xtype: 'registrationpanel',
					hidden: true
				}, {
					xtype: 'logoutpanel',
					hidden: true
				}]
			},{
				xtype : 'weightentrypanel',
				hidden: true
			}, {
				xtype : 'panel',
				id: 'weightchartpanel',
				title : 'Weight Chart',
				layout : 'fit',
				hidden: true,
				items : [{
					xtype : 'weightchart'
				}]
			}, {
				xtype : 'bloodpressureentrypanel'
			}, {
				xtype : 'panel',
				id: 'bloodpressurechartpanel',
				title : 'Blood Pressure Chart',
				layout : 'fit',
				hidden: true,
				items : [{xtype : 'bloodpressurechart'}]
			}]);
		}, //end createContent
		checkLogin: function() {
			Ext.getStore('currentUserStore').load(function(){
				console.log(Ext.getStore('currentUserStore').first().getData().id);
				if (Ext.getStore('currentUserStore').first().getData().id < 1) {
					console.log('Calling showLogin');
					BodyStats.util.Util.showLogin();
				} else {
					console.log('Calling showContent');
					BodyStats.util.Util.showContent();
				}; //if-else
			});
		} 
	} // end statics
});
