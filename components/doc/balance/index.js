
import Chart from "chart.js/auto";



export function reload_balance(place) {
  let one_num = document.querySelector('.one_num')
  let two_num = document.querySelector('.two_num')
  let three_num = document.querySelector('.three_num')
  let ctx = document.querySelector('#myChart')

  let total_one = 23
  let total_two = 34
  let total_three = 12

  one_num.innerHTML = total_one + ' %'
  two_num.innerHTML = total_two + ' %'
  three_num.innerHTML = total_three + ' %'

  new Chart(place, {
    type: 'doughnut',
    data: {
      labels: ["Dash", "Bitcoin", "Ethereum"],
      datasets: [{
        label: '# of Votes',
        data: [total_one, total_two, total_three],
        borderWidth: 0,
        backgroundColor: ['#FAD679', '#018FFF', '#FFFFFF']
      }]
    },
    options: {
      cutout: 54,

      cutoutPercentage: 1,
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      }
    }
  });
}
