Ext.define('BodyStats.view.WeightEntryPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.weightentrypanel',
	title : 'Weight Entry',
	layout: 'anchor',
	items: [{
		xtype: 'datefield',
		fieldLabel: 'Date',
		name: 'entry_date',
		format: 'Y-m-d',
		value: new Date(),
		maxValue: new Date(),
		allowBlank: false
	},{
		xtype: 'timefield',
		fieldLabel: 'Time',
		name: 'entry_time',
		format: 'H:i:s',
		submitFormat: 'H:i:s',
		value: new Date,
		allowBlank: false,
	},{
		xtype: 'numberfield',
		fieldLabel: 'Weight',
		name: 'entry_weight',
		minValue: 50,
		maxValue: 500,
		allowBlank: false,
		decimalPrecision: 1
	}],
	buttons: [{
        text: 'Submit',
        alias: 'widget.weightentrysubmitbutton',
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
            	// create new model instance and upload it
                var vals = form.getValues();
                var currentUserId = Ext.data.StoreManager.lookup('currentUserStore').first().getData().id
                var mi = new BodyStats.model.Weight({
                	user: '/api/v1/user/' + currentUserId + '/',
                	timestamp: (vals['entry_date']+'T'+vals['entry_time']),
                	weight: vals['entry_weight']
            	});
            	mi.save();
            	// find the chart and update it
	            var chart = Ext.ComponentQuery.query('weightchart')[0];
	            chart.store.load();
	            //chart.redraw();
            }
        }
    }],
	initComponent : function() {
		this.callParent(arguments);
	}
});
