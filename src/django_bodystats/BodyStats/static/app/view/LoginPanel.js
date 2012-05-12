Ext.define('BodyStats.view.LoginPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.loginpanel',
	title: 'Login',
	layout: 'anchor',
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
				    success: function(response){
				        // reset #contentpanel contents
				    }
				});
            }
		}
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
})
