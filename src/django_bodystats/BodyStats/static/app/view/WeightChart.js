Ext.define('BodyStats.view.WeightChart', {
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
	alias : 'widget.weightchart',
	title : 'Weight History',
	store: Ext.data.StoreManager.lookup('weightStore'),
	axes: [{
		type: 'Numeric',
		fields: ['weight'],
		grid: true,
		position: 'left',
		title: 'Weights'
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
		yField: 'weight',
		fill: true,
		style: {
			stroke: '#000000',
			fill: '#0000ff',
			opacity: 0.2
		}
	}]
});
console.log('Loaded view.WeightChart');
