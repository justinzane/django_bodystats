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
	
});
