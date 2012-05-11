Ext.define('BodyStats.view.RegistrationPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.registrationpanel',
	title: 'Registration',
	layout: 'anchor',
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Username',
		alias: 'widget.regusernamefield'
	}, {
		xtype: 'textfield',
		inputType: 'password',
		fieldLabel: 'Password',
		alias: 'widget.regpasswordfield'
	}, {
		xtype: 'textfield',
		inputType: 'password',
		fieldLabel: 'Password Verification',
		alias: 'widget.regpassword2field'
	}, {
		xtype: 'textfield',
		vtype: 'email',
		fieldLabel: 'EMail',
		alias: 'widget.regemailfield'
	}],
	buttons: [{
		text: 'Register',
		alias: 'widget.registerbutton',
		handler: function(){
			console.log('registerbutton pushed.')
		}
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
})
