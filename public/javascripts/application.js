$(document).ready(function(){
	$("#chart1").kendoChart({
		title: {
			text: "Claim count by month (in hundreds)"
		},
		series: [
		{ name: "Claim count", data: [100, 300, 350, 125, 200, 160, 380, 350, 115, 210, 180, 110] }
		],
		categoryAxis:{
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ],
			labels: {  }
		},
		tooltip: {
			visible: true,
			format: "{0:N0}"
		},
		theme: 'blueOpal'
	});

	$("#chart2").kendoChart({
		title: {
			text: "Total claims for last 5 years (in thousands)"
		},
		series: [
		{ name: "Claim count per year", data: [100, 250, 210, 125, 230] }
		],
		categoryAxis:{
			categories: [ 2007, 2008, 2009, 2010, 2011 ],
			labels: { }
		},
		tooltip: {
			visible: true,
			format: "{0:N0}"
		},
		theme: 'blueOpal'
	});

	$("#grid1").kendoGrid({
		theme: 'blueOpal',
		dataSource: {
			 data: [{Accidenttype: "Leg Injury", Claimcount: 6300, Totalincurred: 145000, Totalpaid: 200000},
		            {Accidenttype: "Alleged food poisoning", Claimcount: 1300, Totalincurred: 240000, Totalpaid: 280000},
		            {Accidenttype: "Exertion - Lifting", Claimcount: 2500, Totalincurred: 180000, Totalpaid: 130000},
		            {Accidenttype: "Ingestion of substance", Claimcount: 2800, Totalincurred: 405000, Totalpaid: 430000},
		            {Accidenttype: "Contact with sharp objects", Claimcount: 4300, Totalincurred: 45000, Totalpaid: 18000},
		            {Accidenttype: "Contact with metal objects", Claimcount: 4300, Totalincurred: 45000, Totalpaid: 18000},
		            {Accidenttype: "Exertion - pulling", Claimcount: 4300, Totalincurred: 45000, Totalpaid: 18000},
		            {Accidenttype: "Contact with hot substances", Claimcount: 4300, Totalincurred: 45000, Totalpaid: 18000}],
		     pageSize: 10
		},
		pageable: true,
		filterable: true,
		sortable: true,
		scrollable: true,
		columns: [ {
			field: "Accidenttype",
			title: "Accident type",
			width: 100
		} , {
			field: "Claimcount",
			title: "Claim count",
			width: 100
		} , {
			field: "Totalincurred",
			title: 'Total incurred',
			width: 100
		} , {
			field: "Totalpaid",
			title: "Total paid",
			width: 100
		}
		]
	});

	$("#chart4").kendoChart({
		theme: "blueOpal",
		title: {
			text: "Average Claim Lag Days"
		},
		legend: {
			position: "bottom"
		},
		seriesDefaults: {
			type: "bar",
			stack: true
		},
		series: [{
			name: "Reported to Setup Lag",
			data: [50, 10, 50, 40, 20, 30]
		}, {
			name: "Accident to Vendor Lag",
			data: [50, 70, 80, 60, 100, 80]
			}],
			valueAxis: {
				labels: {
					format: "{0}"
				}
			},
			categoryAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
			},
			tooltip: {
				visible: true,
				format: "{0}"
			}
		});

		$("#chart3").kendoChart({
			title: {
				text: "Claims per business unit in 2011"
			},
			legend: {
				position: "bottom"
			},
			seriesDefaults: {
				labels: {
					visible: true,
					format: "{0}%"
				}
			},
			series: [{
				type: "pie",
				data: [{
					category: "Florida",
					value: 22
				}, {
					category: "Northwest",
					value: 2
				}, {
					category: "South",
					value: 49
				}, {
					category: "Central",
					value: 13
				}, {
					category: "Midwest",
					value: 14
					}]
					}],
					tooltip: {
						visible: true,
						format: "{0:N0}"
					},
					theme: 'blueOpal'
				});
			})

