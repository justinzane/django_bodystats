Ext.define('BodyStats.view.LoginPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.loginpanel',
	title: 'Login',
	layout: 'anchor',
	autoRender: true,
	autoScroll: true,
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Username',
		name: 'username',
		allowBlank: false
	}, {
		xtype: 'textfield',
		inputType: 'password',
		fieldLabel: 'Password',
		name: 'password',
		allowBlank: false
	}],
	buttons: [{
		text: 'Login',
		alias: 'widget.loginbutton',
		handler: function() {
			console.log('loginbutton pressed.');
			var form = this.up('form').getForm();
            if (form.isValid()) {
                var vals = form.getValues();
                Ext.Ajax.request({
				    url: '/login',
				    defaultHeaders: {
				    	"X-CSRFToken": Ext.util.Cookies.get('csrftoken')
				    },
				    params: {
				    	username: vals['username'],
				    	password: vals['password']
				    },
				    success: Ext.Function.defer(BodyStats.util.Util.checkLogin, 1500),
				    failure: function(){
				    	Ext.MessageBox.alert("Login failed.", "Try again or Register an account.");
				    }				    
				});
            }
		}
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
})
