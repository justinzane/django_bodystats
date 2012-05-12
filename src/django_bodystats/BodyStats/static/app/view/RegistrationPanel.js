Ext.define('BodyStats.view.RegistrationPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.registrationpanel',
	title: 'Registration',
	layout: 'anchor',
	autoScroll: true,
	items: [{
		xtype: 'textfield',
		fieldLabel: 'Username',
		name: 'username',
		allowBlank: false,
		minLength: '4'
	}, {
		xtype: 'textfield',
		fieldLabel: 'First Name',
		name: 'firstname',
		allowBlank: true
	}, {
		xtype: 'textfield',
		fieldLabel: 'Last Name',
		name: 'lastname',
		allowBlank: true
	}, {
		xtype: 'textfield',
		inputType: 'password',
		fieldLabel: 'Password',
		name: 'password',
		allowBlank: false,
		minlength: 6
	}, {
		xtype: 'textfield',
		inputType: 'password',
		fieldLabel: 'Password Verification',
		name: 'password2',
		allowBlank: false,
		validator: function(val) {
			pw1 = this.up('form').getForm().getValues()['password']
			console.log(["PW1 ", pw1, " PW2 ", val]);
			return val == pw1;
		}
	}, {
		xtype: 'textfield',
		vtype: 'email',
		fieldLabel: 'EMail',
		name: 'email',
	}, {
		xtype: 'fieldcontainer',
		fieldLabel: 'Sex',
		defaultType: 'radiofield',
		items: [{
			boxLabel: 'Female',
			name: 'sex',
			inputValue: 'F',
			id: 'sexradioF'
		}, {
			boxLabel: 'Male',
			name: 'sex',
			inputValue: 'M',
			id: 'sexradioM'
		}]
	}, {
		xtype: 'fieldcontainer',
		fieldLabel: 'Height',
		defaultType: 'numberfield',
		items: [{
			fieldLabel: 'Feet',
			name: 'heightfeet',
			minValue: 3,
			maxValue: 7
		}, {
			fieldLabel: 'Inches',
			name: 'heightinches',
			minValue: 0.0,
			maxValue: 12.0
		}]
	}], //widget.registrationpanel
	buttons: [{
		text: 'Register',
		alias: 'widget.registerbutton',
		handler: function(){
			console.log('registerbutton pushed.')
			var form = this.up('form').getForm();
            if (form.isValid()) {
                var vals = form.getValues();
                console.log(vals);
                Ext.Ajax.defaultHeaders = {
			    	"X-CSRFToken": Ext.util.Cookies.get('csrftoken')
			    };
                Ext.Ajax.request({
				    url: '/register',
				    params: {
				    	username: vals['username'],
				    	firstname: vals['firstname'],
				    	lastname: vals['lastname'],
				    	password: vals['password'],
				    	email: vals['email'],
				    	sex: vals['sex'],
				    	height: 12*parseInt(vals['heightfeet']) + parseFloat(vals['heightinches'])
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
