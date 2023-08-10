import Chart from 'chart.js/auto';
export let market_arr = [
    {
        name: `DASH`,
        coin: `DASH`,
        procent: 1.93,
        coin_bal: 18423,
        collor: {
            r1: `rgba(39, 169, 210, 1)`,
            r2: `rgba(39, 169, 210, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `Aeternity`,
        coin: `AE`,
        procent: -1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(235, 131, 56, 1)`,
            r2: `rgba(235, 131, 56, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `Ethereum`,
        coin: `ETH`,
        procent: 1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(97, 98, 214, 1)`,
            r2: `rgba(97, 98, 214, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `PeerCoin`,
        coin: `PPC`,
        procent: 1.93,
        coin_bal: 18423,
        collor: {
            r1: `rgba(108, 186, 96, 1)`,
            r2: `rgba(108, 186, 96, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `BitCoin`,
        coin: `BTC`,
        procent: -1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(100, 70, 150, 1)`,
            r2: `rgba(77, 51, 127, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `GridCoin`,
        coin: `GRS`,
        procent: 1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(188, 86, 97, 1)`,
            r2: `rgba(188, 86, 97, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `NavCoin`,
        coin: `NAV`,
        procent: 1.93,
        coin_bal: 18423,
        collor: {
            r1: `rgba(243, 80, 80, 1)`,
            r2: `rgba(243, 80, 80, 0.25)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `LiteCoin`,
        coin: `LTC`,
        procent: -1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(243, 80, 80, 1)`,
            r2: `rgba(243, 80, 80, 0.25)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
    {
        name: `Nano`,
        coin: `NANO`,
        procent: 1.14,
        coin_bal: 18423,
        collor: {
            r1: `rgba(191, 97, 214, 1)`,
            r2: `rgba(191, 97, 214, 0.5)`
        },
        kurs_cur: `EUR`,
        kurs: {
            EUR: 1307.96,
            USD: 1643.52,
            BTC: 1463.23
        }

    },
]




export function creat_market_cart(name_arr, plase, arr) {
    for (const name of name_arr) {
        let item
        let i_obj
        for (const itemn of market_arr) {
            if (itemn[`name`] == name) {
                item = itemn
                i_obj = market_arr.indexOf(itemn)
            }
        }
        let coll
        if (+item.procent >= 1) {
            coll = `rgba(0, 232, 172, 1)`
        }
        else {
            coll = `rgba(243, 80, 80, 1)`
        }


        let market_cart = document.createElement(`div`)
        let mr_cart_info = document.createElement(`div`)
        let mr_cart_chart = document.createElement(`canvas`)
        let mr_cart_coin = document.createElement(`div`)
        let mr_cart_kurs = document.createElement(`div`)
        let mr_cart_kurs_vol = document.createElement(`div`)
        let mr_cart_kurs_vol_1 = document.createElement(`span`)
        let mr_cart_kurs_vol_2 = document.createElement(`span`)
        let mr_cart_kurs_vol_3 = document.createElement(`span`)
        let mr_cart_kurs_cur = document.createElement(`div`)
        let mr_cart_kurs_cur_btn = document.createElement(`div`)
        let mr_cart_kurs_cur_btn_1 = document.createElement(`button`)
        let mr_cart_kurs_cur_btn_2 = document.createElement(`button`)
        let mr_cart_kurs_cur_btn_3 = document.createElement(`button`)
        let mr_cart_kurs_cur_vol = document.createElement(`span`)
        let coin_logo_r1 = document.createElement(`div`)
        let coin_logo_r2 = document.createElement(`div`)
        let coin_logo = document.createElement(`img`)
        let coin_name = document.createElement(`div`)
        let coin_name_n = document.createElement(`div`)
        let coin_name_k = document.createElement(`div`)





        market_cart.classList.add(`market_cart`)
        mr_cart_info.classList.add(`mr_cart_info`)
        mr_cart_coin.classList.add(`mr_cart_coin`)
        coin_logo_r2.classList.add(`coin_logo_r2`)
        coin_logo_r1.classList.add(`coin_logo_r1`)
        coin_logo.classList.add(`coin_logo`)
        coin_name.classList.add(`coin_name`)
        coin_name_n.classList.add(`coin_name_n`)
        coin_name_k.classList.add(`coin_name_k`)
        mr_cart_kurs.classList.add(`mr_cart_kurs`)
        mr_cart_kurs_vol.classList.add(`mr_cart_kurs_vol`)
        mr_cart_kurs_vol_1.classList.add(`mr_cart_kurs_vol_1`)
        mr_cart_kurs_vol_3.classList.add(`mr_cart_kurs_vol_1`)
        mr_cart_kurs_vol_2.classList.add(`mr_cart_kurs_vol_2`)
        mr_cart_kurs_cur.classList.add(`mr_cart_kurs_cur`)
        mr_cart_kurs_cur_btn.classList.add(`mr_cart_kurs_cur_btn`)
        mr_cart_kurs_cur_btn_1.classList.add(`mr_cart_kurs_cur_btn_1`)
        mr_cart_kurs_cur_btn_2.classList.add(`mr_cart_kurs_cur_btn_2`)
        mr_cart_kurs_cur_btn_3.classList.add(`mr_cart_kurs_cur_btn_3`)
        mr_cart_kurs_cur_vol.classList.add(`mr_cart_kurs_cur_vol`)
        mr_cart_chart.classList.add(`mr_cart_chart`)

        mr_cart_chart.setAttribute("width", "306px")
        mr_cart_chart.setAttribute("height", "47px")

        coin_logo.src = `/public/${item.name}.svg`
        coin_logo_r1.style.background = item.collor.r1
        coin_logo_r2.style.background = item.collor.r2

        coin_name_n.innerHTML = item.name
        coin_name_k.innerHTML = item.procent + `%`

        mr_cart_kurs_vol_1.innerHTML = `Volume`
        mr_cart_kurs_vol_2.innerHTML = (item.coin_bal).toLocaleString('en-US');
        mr_cart_kurs_vol_3.innerHTML = item.coin

        mr_cart_kurs_cur_btn_1.innerHTML = `EUR`
        mr_cart_kurs_cur_btn_2.innerHTML = `USD`
        mr_cart_kurs_cur_btn_3.innerHTML = `BTC`

        mr_cart_kurs_cur_vol.innerHTML = (item.kurs[item.kurs_cur]).toLocaleString('en-US') + `  ` + item.kurs_cur

        coin_name_k.style.color = coll



        plase.append(market_cart)
        market_cart.append(mr_cart_info, mr_cart_chart)
        mr_cart_info.append(mr_cart_coin, mr_cart_kurs)
        mr_cart_kurs.append(mr_cart_kurs_cur, mr_cart_kurs_vol)
        mr_cart_kurs_cur.append(mr_cart_kurs_cur_btn, mr_cart_kurs_cur_vol)
        mr_cart_kurs_cur_btn.append(mr_cart_kurs_cur_btn_1, mr_cart_kurs_cur_btn_2, mr_cart_kurs_cur_btn_3)
        mr_cart_kurs_vol.append(mr_cart_kurs_vol_1, mr_cart_kurs_vol_2, mr_cart_kurs_vol_3)
        mr_cart_coin.append(coin_logo_r2, coin_name)
        coin_name.append(coin_name_n, coin_name_k)
        coin_logo_r2.append(coin_logo_r1)
        coin_logo_r1.append(coin_logo)

        let btn_arr = mr_cart_kurs_cur_btn.children
        for (const btn of btn_arr) {

            btn.onclick = () => {
                for (const btn of btn_arr) {
                    btn.classList.remove(`mr_activ`)
                }
                market_arr[i_obj].kurs_cur = `${btn.innerHTML}`

                plase.innerHTML = ``
                creat_market_cart(name_arr, plase, arr)
            }


            if (btn.innerHTML == item.kurs_cur) {
                btn.classList.add(`mr_activ`)
            }
        }
        // console.log(555);



        // ********************



        // let arr = [
        //     {
        //         currency: "Bitcoin",
        //         money: "5 248",
        //         procent: "2,59",
        //     },
        //     {
        //         currency: "Ethereum",
        //         money: "5 248",
        //         procent: "2,59",
        //     },
        //     {
        //         currency: "Dash",
        //         money: "5 248",
        //         procent: "2,59",
        //     },
        //     {
        //         currency: "GridCoin",
        //         money: "5 248",
        //         procent: "2,59",
        //     },
        //     {
        //         currency: "Aeternity",
        //         money: "5 248",
        //         procent: "2,59",
        //     }
        // ]





        let n_Arr = [2, 100, 10, 90, 10, 110, 28, 56, 48, 120, 16, 46, 10, 56, 36, 48, 123, 68, 34, 25, 102, 36, 3, 92]
        let labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
        wallets_chart(mr_cart_chart, n_Arr, labels)

        function wallets_chart(place, data, labels) {
            new Chart(place, {

                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        borderWidth: 3,
                        tension: 0,
                        pointHoverBorderWidth: 4,
                        pointRadius: 4,
                        hoverRadius: 6,
                        borderColor: coll,
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
                            grace: '0,3',
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
        // *********************
    }
}












