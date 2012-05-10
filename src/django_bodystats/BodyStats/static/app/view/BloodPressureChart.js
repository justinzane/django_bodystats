Ext.define('BodyStats.view.BloodPressureChart', {
	extend : 'Ext.chart.Chart',
	autoRender: true,
	animate: true,
	background: {
		gradient: {
			id: 'r2gGradient',
			angle: 90,
			stops: {
				0: {color: '#ff7f7f'},
				100: {color: '#7fff7f'}
			}
		}
	},
	border: 20,
	frame: true,
	frameSize: 10,
	insetPadding: 10,
	margin: 10,
	shadow: true,
	legend: {
		position: 'right'
	},
	alias : 'widget.bloodpressurechart',
	title : 'BloodPressure History',
	store: Ext.data.StoreManager.lookup('bloodpressureStore'),
	axes: [{
		type: 'Numeric',
		fields: ['systolic', 'diastolic'],
		grid: true,
		position: 'left',
		title: 'BloodPressures',
		minimum: 0
	}, {
		type: 'Time',
		fields: ['timestamp'],
		grid: true,
		position: 'bottom',
		title: 'Time',
		label: {
			renderer: function(value){
				var date = new Date(value);
				return Ext.Date.format(date, 'Y-m-d');
			}
		}
	}],
	series: [{
		type: 'line',
		xField: 'timestamp',
		yField: 'systolic',
		fill: true,
		style: {
			stroke: '#000000',
			fill: '#007f7f',
			opacity: 0.4
		}
	}, {
		type: 'line',
		xField: 'timestamp',
		yField: 'diastolic',
		fill: true,
		style: {
			stroke: '#000000',
			fill: '#00007f',
			opacity: 0.4
		}
	}]
});
console.log('Loaded view.BloodPressureChart');
