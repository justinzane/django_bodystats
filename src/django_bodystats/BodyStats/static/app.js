/**
 * Weight Definitions
 */
console.log('Starting app.js');
Ext.Loader.setConfig({
	enabled : true,
	disableCaching : true
});

Ext.application({
	name : 'BodyStats',
	appFolder : 'static/app',
	id: 'bodystats',
	requires: ['Ext.util.Cookies'],
	models : [
		'BodyStats.model.CurrentUser', 
		'BodyStats.model.Weight', 
		'BodyStats.model.BloodPressure'
	],
	stores : [
		'BodyStats.store.CurrentUser', 
		'BodyStats.store.Weight', 
		'BodyStats.store.BloodPressure'
	],
	controllers : [
		'BodyStats.controller.Main',
		'BodyStats.controller.Header', 
		'BodyStats.controller.UserAction',
		'BodyStats.controller.Weight', 
		'BodyStats.controller.BloodPressure'
	],
	launch : function() {
		console.log('Starting app.launch');
		var mainController = Ext.create('BodyStats.controller.Main');
		console.log(mainController);
		var vp = Ext.create('Ext.container.Viewport', {
			alias : 'viewport',
			layout: 'border',
			padding: '2%',
			items : [{
				xtype: 'headerpanel',
				region: 'north'
			}, {
				xtype : 'panel',
				region: 'center',
				layout : 'accordion',
				alias: 'widget.contentpanel',
				id: 'contentpanel'
			}, {
				xtype: 'panel',
				region: 'south',
				html: '&copy 2012, Justin Chudgar'
			}]
		});
		if (Ext.getStore('currentUserStore').first().getData().id < 1) {
			mainController.showLogin();
		} else {
			mainController.showContent();
		}; //if-else
	}
});
