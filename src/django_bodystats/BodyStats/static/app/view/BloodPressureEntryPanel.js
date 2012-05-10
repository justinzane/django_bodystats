Ext.define('BodyStats.view.BloodPressureEntryPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.bloodpressureentrypanel',
	title : 'BloodPressure Entry',
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
		fieldLabel: 'Systolic',
		name: 'entry_systolic',
		minValue: 0,
		maxValue: 500,
		allowBlank: false,
		decimalPrecision: 0
	},{
		xtype: 'numberfield',
		fieldLabel: 'Diastolic',
		name: 'entry_diastolic',
		minValue: 0,
		maxValue: 500,
		allowBlank: false,
		decimalPrecision: 0
	}],
	buttons: [{
        text: 'Submit',
        alias: 'widget.bloodpressureentrysubmitbutton',
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
            	// create new model instance and upload it
                var vals = form.getValues();
                var currentUserId = Ext.data.StoreManager.lookup('currentUserStore').first().getData().id
                var mi = new BodyStats.model.BloodPressure({
                	user: '/api/v1/user/' + currentUserId + '/',
                	timestamp: (vals['entry_date']+'T'+vals['entry_time']),
                	systolic: vals['entry_systolic'],
                	diastolic: vals['entry_diastolic']
            	});
            	mi.save();
            	// find the chart and update it
	            var chart = Ext.ComponentQuery.query('bloodpressurechart')[0];
	            chart.store.load();
	            //chart.redraw();
            }
        }
    }],
	initComponent : function() {
		this.callParent(arguments);
	}
});
