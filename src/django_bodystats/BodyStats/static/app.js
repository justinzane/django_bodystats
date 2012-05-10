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
	models : ['BodyStats.model.User', 'BodyStats.model.Weight', 'BodyStats.model.BloodPressure'],
	stores : ['BodyStats.store.User', 'BodyStats.store.Weight', 'BodyStats.store.BloodPressure'],
	controllers : ['BodyStats.controller.Header', 'BodyStats.controller.Weight', 'BodyStats.controller.BloodPressure'],
	launch : function() {
		console.log('Starting app.launch');
		Ext.create('Ext.container.Viewport', {
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
				items : [{
					xtype : 'weightentrypanel'
				}, {
					xtype : 'panel',
					title : 'Weight Chart',
					layout : 'fit',
					items : [{
						xtype : 'weightchart'
					}]
				}, {
					xtype : 'bloodpressureentrypanel'
				}, {
					xtype : 'panel',
					title : 'Blood Pressure Chart',
					layout : 'fit',
					items : [{
						xtype : 'bloodpressurechart'
					}]
				}]
			}, {
				xtype: 'panel',
				region: 'south',
				html: '&copy 2012, Justin Chudgar'
			}]
		});
	}
});
