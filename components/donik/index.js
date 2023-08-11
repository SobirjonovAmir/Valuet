import Chart from 'chart.js/auto';

let arr = [
    {
        currency: "Bitcoin",
        money: "5 248",
        procent: "2,59",
    },
    {
        currency: "Ethereum",
        money: "5 248",
        procent: "2,59",
    },
    {
        currency: "Dash",
        money: "5 248",
        procent: "2,59",
    },
    {
        currency: "GridCoin",
        money: "5 248",
        procent: "2,59",
    },
    {
        currency: "Aeternity",
        money: "5 248",
        procent: "2,59",
    }
]

let backgrounds = [
    {
        name: "Bitcoin",
        icon: "/public/Bitcoin.svg",
        background: "linear-gradient(201deg, rgba(96, 67, 146, 0.50) 0%, rgba(15, 11, 56, 0.50) 93.37%)",
        background_icon: "#4D337F",
        background_icon_outline: "#644696"
    },
    {
        name: "Ethereum",
        icon: "/public/Ethereum.svg",
        background: "linear-gradient(201deg, #6162D6 0%, #0F0B38 93.37%)",
        background_icon: "#4948A8",
        background_icon_outline: "#5454BD"
    },
    {
        name: "Dash",
        icon: "/public/Dash.svg",
        background: "linear-gradient(201deg, #72EB38 0%, #0F0B38 93.37%)",
        background_icon: "#6CBA73",
        background_icon_outline: "#6CBA30"
    },
    {
        name: "GridCoin",
        icon: "/public/gridCoin.svg",
        background: "linear-gradient(201deg, #D66168 0%, #0F0B38 93.37%)",
        background_icon: "#AA5E79",
        background_icon_outline: "#BC5631"
    },
    {
        name: "Aeternity",
        icon: "/public/Aeternity.svg",
        background: "linear-gradient(201deg, #EB8338 0%, #0F0B38 93.37%)",
        background_icon: "#915D3B",
        background_icon_outline: "#C87038"
    }
]


let container = document.querySelector('.containerr')

reloadWallets(container, arr)
function reloadWallets(place, arr) {
    place.innerHTML = ""
    for (const item of arr) {
        const mainDiv = document.createElement('div');
        const heading = document.createElement('h2');
        const miniBoxDiv = document.createElement('div');
        const item1Div = document.createElement('div');
        const moneyHeading = document.createElement('h2');
        const percentageParagraph = document.createElement('p');
        const item2Div = document.createElement('div');
        const boxBDiv = document.createElement('div');
        const roundDiv = document.createElement('div');
        const bitcoinImage = document.createElement('img');
        const canvas_box = document.createElement('div')
        const box_top = document.createElement('div')
        const canvas = document.createElement("canvas")

        canvas_box.classList.add("canvas-box")
        box_top.classList.add("box-top")
        mainDiv.setAttribute('class', 'box__');
        heading.setAttribute('class', 'card_h2');
        heading.innerText = item.currency;
        miniBoxDiv.setAttribute('class', 'mini_box');
        item1Div.setAttribute('class', 'item1');
        moneyHeading.setAttribute('class', 'money');
        moneyHeading.innerText = `${item.money} USD`;
        percentageParagraph.setAttribute('class', 'pr');
        percentageParagraph.innerText = `+${item.procent}%`;
        item1Div.appendChild(moneyHeading);
        item1Div.appendChild(percentageParagraph);
        item2Div.setAttribute('class', 'el2');
        boxBDiv.setAttribute('class', 'box_B');
        roundDiv.setAttribute('class', 'round');
        bitcoinImage.setAttribute('class', 'B');
        bitcoinImage.setAttribute('alt', '/public/Bitcoin.svg');
        canvas.setAttribute("width", "306px")
        canvas.setAttribute("height", "90px")

        for (const el of backgrounds) {
            // console.log(el.name === item.currency);
            if (el.name === item.currency) {
                bitcoinImage.setAttribute('src', el.icon);
                mainDiv.style.background = el.background
                roundDiv.style.background = el.background_icon_outline
                boxBDiv.style.background = el.background_icon
            }
        }
        wallets_chart(canvas, [1, 2, 3, -40, 5, 6, 7, 8, 9, 10, 4, 6, 8, 1, 5, 6, 9, 2, 5, 11, 20, 30, 40, 50, 51, 52, 53, -54], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 6, 8, 1, 5, 6, 9, 2, 5, 11, 20, 30, 40, 50, 51, 52, 53, 54])

        roundDiv.appendChild(bitcoinImage);
        boxBDiv.appendChild(roundDiv);
        item2Div.appendChild(boxBDiv);
        miniBoxDiv.append(item1Div, item2Div);
        box_top.append(heading, miniBoxDiv)
        canvas_box.append(canvas)
        mainDiv.append(box_top, canvas_box);
        place.appendChild(mainDiv);
    }
}

function wallets_chart(place, data, labels) {
    new Chart(place, {

        type: 'line',
        data: {
            labels: data,
            datasets: [{
                data: labels,
                borderWidth: 3,
                tension: 0,
                pointHoverBorderWidth: 4,
                pointRadius: 4,
                hoverRadius: 6,
                borderColor: "red",
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
                    bottom: 16,
                },
            },
            scales: {
                x: {
                    display: false,
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
                    enabled: true,
                    intersect: false,
                    axis: 'x',
                    position: 'average',
                    backgroundColor: '#32395E',
                    titleFontStyle: '400',
                    titleAlign: 'center',
                    titleMarginBottom: 0,
                    bodyFontColor: '#fff',
                    footerFontStyle: 'none',
                    footerAlign: 'center',
                    displayColors: false,
                },
            }
        }
    });
}