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
	requires: [
		'Ext.util.Cookies',
		'BodyStats.util.Util'
	],
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
		'BodyStats.controller.Header', 
		'BodyStats.controller.UserAction',
		'BodyStats.controller.Weight', 
		'BodyStats.controller.BloodPressure'
	],
	launch : function() {
		console.log('Starting app.launch');
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
				maxWidth: '960px',
				alias: 'widget.contentpanel',
				id: 'contentpanel'
			}, {
				xtype: 'panel',
				region: 'south',
				html: '&copy 2012, Justin Chudgar'
			}]
		});
		BodyStats.util.Util.createContent();
		BodyStats.util.Util.checkLogin();
	}
});
