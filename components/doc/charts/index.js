import Chart from 'chart.js/auto';


export function spendings_chart(place, data, labels) {
	const border = place.createLinearGradient(0, 0, 280, 0);
	border.addColorStop(0, 'rgba(1, 143, 222, 0)');
	border.addColorStop(0.5, 'rgba(1, 143, 222, 1)')
	border.addColorStop(1, 'rgba(1, 143, 222, 0)');

	const background = place.createLinearGradient(0, 0, 280, 0);
	background.addColorStop(0, 'rgba(20, 35, 100, 0)');
	background.addColorStop(0.5, 'rgba(20, 35, 100, .4)')
	background.addColorStop(1, 'rgba(20, 35, 100, 0)');

	new Chart(place, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				data: data,
				borderWidth: 3,
				tension: 0.4,
				pointHoverBorderWidth: 4,
				pointRadius: 4,
				hoverRadius: 6,
				fill: true,
				borderColor: border,
				backgroundColor: background,
				pointHoverBorderColor: 'rgba(10,91,183,.5)',
				pointHoverBackgroundColor: '#0182E8',
				pointBorderColor: "transparent",
				pointBackgroundColor: 'transparent',
			}]
		},
		options: {
			responsive: true,
			layout: {
				padding: {
					bottom: 16
				}
			},
			responsive: true,
			scales: {
				x: {
					border: {
						display: false
					},
					display: true,
					grid: {
						display: false,
						lineWidth: 1,
						color: "rgba(1, 144,224, .5)",
					},
					ticks: {
						min: 0,
						stepSize: 4,
						color: "white",
						font: {
							size: 14,
							family: 'Open Sans',
							weight: '300',
						},
					}
				},
				y: {
					display: false,
					grace: '3',
				}
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					xAlign: false,
					callbacks: {
						title: function () {
							return '';
						},
						label: function (context) {
							return `$ ${context.formattedValue}`
						},
					},
					intersect: false,
					axis: 'x',
					backgroundColor: '#32395E',
					titleFontStyle: '400',
					titleMarginBottom: 0,
					displayColors: false,
				},
			}
		}
	});
}
//!------------------------------------------------------------------




//const walletsChart = document.querySelector('#walletsChart').getContext('2d')

//let wallets_labels = ["June", "July", "August", "September", "October"]
//market_chart(walletsChart, market_data, wallets_labels, true)

export function market_chart(place, data, labels, boolean) {
	const border = place.createLinearGradient(0, 0, place.canvas.width, 0);
	border.addColorStop(0, 'rgba(1, 143, 222, 0)');
	border.addColorStop(0.5, 'rgba(1, 143, 222, 1)')
	border.addColorStop(1, 'rgba(1, 143, 222, 0)');

	const background = place.createLinearGradient(0, 0, 640, 0);
	background.addColorStop(0, 'rgba(20, 35, 100, 0)');
	background.addColorStop(0.5, 'rgba(20, 35, 100, .4)')
	background.addColorStop(1, 'rgba(20, 35, 100, 0)');

	new Chart(place, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [{
				data: data,
				borderWidth: 5,
				tension: 0.4,
				pointHoverBorderWidth: 4,
				pointRadius: 4,
				hoverRadius: 6,
				fill: boolean,
				borderColor: border,
				backgroundColor: background,
				pointHoverBorderColor: 'rgba(10,91,183,.5)',
				pointHoverBackgroundColor: '#0182E8',
				pointBorderColor: "transparent",
				pointBackgroundColor: 'transparent',
			}]
		},
		options: {
			responsive: true,
			layout: {
				padding: {
					left: 15,
					right: 25,
					bottom: 16
				}
			},
			responsive: true,
			scales: {
				x: {
					border: {
						display: false
					},
					display: true,
					grid: {
						display: false,
						lineWidth: 1,
						color: "rgba(1, 144,224, .5)",
					},
					ticks: {
						color: "#54669C",
						font: {
							size: boolean ? 14 : 12,
							family: 'Open Sans',
							weight: '400',
						},
					}
				},
				y: {
					display: true,
					beginAtZero: true,
					grace: '3',
					grid: {
						display: true,
						lineWidth: 1,
						color: "#11184E",
					},
					ticks: {
						callback: function (value) {
							return '$' + value;
						},
						color: "#54669C",
						font: {
							size: boolean ? 14 : 12,
							family: 'Open Sans',
							weight: '400',
						},
					}
				}
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					xAlign: false,
					callbacks: {
						title: function () {
							return '';
						},
						label: function (context) {
							return `$ ${context.formattedValue}`
						},
					},
					intersect: false,
					axis: 'x',
					backgroundColor: '#32395E',
					titleFontStyle: '400',
					titleMarginBottom: 0,
					displayColors: false,
				},
			}
		}
	});
}
