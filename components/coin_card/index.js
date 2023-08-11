export let coin_arr = {
    ballans: 30000000,
    "BitCoin": {
        tara: 1200,
        collor: {
            background: `linear-gradient(201deg, #604392 0%, #0F0B38 93.37%)`,
            r1: `rgba(100, 70, 150, 1)`,
            r2: `rgba(77, 51, 127, 0.5)`
        },
        kurs: [[`true`, 6542.35], [`false`, 6264.35], [`false`, 6642.22]]
    },
    "GridCoin": {
        tara: 1200,
        collor: {
            background: `linear-gradient(201deg, #604392 0%, #0F0B38 93.37%)`,
            r1: `rgba(188, 86, 97, 1)`,
            r2: `rgba(170, 94, 105, 0.4)`
        },
        kurs: [[`true`, 6542.35], [`false`, 6264.35], [`false`, 6642.22]]
    },
    "Ethereum": {
        coin: `ETH`,
        tara: 1200,
        collor: {
            background: `linear-gradient(201deg, #6162D6 0%, #0F0B38 93.37%)`,
            r1: `rgba(84, 84, 189, 1)`,
            r2: `rgba(73, 72, 168, 0.4)`
        },
        kurs: [[`true`, 6542.35], [`false`, 6264.35], [`false`, 6642.22]]
    },
    "Aeternity": {
        tara: 1200,
        collor: {
            background: `linear-gradient(201deg, #EB8338 0%, #0F0B38 93.37%)`,
            r1: `rgba(200, 112, 56, 1)`,
            r2: `rgba(145, 93, 59, 0.5)`
        },
        kurs: [[`true`, 6542.35], [`false`, 6264.35], [`false`, 6642.22]]
    },
    "Dash": {
        tara: 1200,
        collor: {
            background: `linear-gradient(201deg, #EB8338 0%, #0F0B38 93.37%)`,
            r1: `rgba(200, 112, 56, 1)`,
            r2: `rgba(145, 93, 59, 0.5)`
        },
        kurs: [[`true`, 6542.35], [`false`, 6264.35], [`false`, 6642.22]]
    },
    curs_arrow: {
        true: {
            Image: `/public/up.svg`
        },
        false: {
            Image: `/public/down.svg`
        }
    }
}

let currencies = {
    "BTC": "BitCoin",
    "ETH": "Ethereum",
    "XRP": "XRP",
    "AE": "Aeternity",
    "DASH": "Dash",
    "NEO": "NEO",
    "GRC": "GridCoin"
}


export function reload_card(place, array) {
    place.innerHTML = ""
    for (const item of array) {
        let coin_cart = document.createElement(`div`)
        let coin_name = document.createElement(`h1`)
        let coin_info = document.createElement(`div`)
        let coin_logo_r1 = document.createElement(`div`)
        let coin_logo_r2 = document.createElement(`div`)
        let coin_logo = document.createElement(`img`)
        let coin_balans = document.createElement(`div`)
        let coin_balans_1 = document.createElement(`span`)
        let coin_balans_2 = document.createElement(`span`)

        let coin_kurs = document.createElement(`div`)

        coin_cart.classList.add(`coin_cart`)
        coin_info.classList.add(`coin_info`)
        coin_name.classList.add(`coin_name`)
        coin_logo_r1.classList.add(`coin_logo_r1`)
        coin_logo_r2.classList.add(`coin_logo_r2`)
        coin_logo.classList.add(`coin_logo`)
        coin_balans.classList.add(`coin_balans`)
        coin_balans_1.classList.add(`coin_balans_1`)
        coin_balans_2.classList.add(`coin_balans_2`)
        coin_kurs.classList.add(`coin_kurs`)

        coin_logo.src = item.currency.images ? item.currency.images["200x200"] : console.log("not an image");

        for (let i = 0; i < 3; i++) {
            let hr = document.createElement(`div`)
            let coin_kurs_box = document.createElement(`div`)
            let coin_kurs_arrow = document.createElement(`img`)
            let coin_kurs_val_box = document.createElement(`div`)
            let coin_kurs_val_1 = document.createElement(`span`)
            let coin_kurs_val_2 = document.createElement(`span`)


            hr.classList.add(`hr`)
            coin_kurs_box.classList.add(`coin_kurs_box`)
            coin_kurs_arrow.classList.add(`coin_kurs_arrow`)
            coin_kurs_val_box.classList.add(`coin_kurs_val_box`)
            coin_kurs_val_2.classList.add(`coin_kurs_val_2`)
            coin_kurs_val_1.classList.add(`coin_kurs_val_1`)

            if (item.balance < 0) {
                //coin_kurs_val_1.innerHTML = `$ ${(coin_arr[currencies[item.currency]].tara).toLocaleString()}= ${(Math.round((coin_arr[currencies[item.currency]].tara / (coin_arr[currencies[item.currency]].kurs[i][1])) * 1000) / 1000).toLocaleString()} ${(item.currency).toLowerCase()}`
                //coin_kurs_val_2.innerHTML = `1 ${item.currency} = $ ${(coin_arr[currencies[item.currency]].kurs[i][1]).toLocaleString()} `
                coin_kurs_arrow.src = "/public/up.svg"
                
            } else {
                coin_kurs_val_1.innerHTML = `$ ${(item.currency.values["USD"].volume24h).toLocaleString()}= ${(item.currency.values["USD"].volume24h).toLocaleString()} ${(item.currency.symbol).toLowerCase()}`
                //coin_kurs_val_2.innerHTML = `1 ${item.currency} = $ ${(coin_arr[currencies[item.currency]].kurs[i][1]).toLocaleString()} `
                coin_kurs_arrow.src = "/public/down.svg"
            }



            coin_kurs_val_box.append(coin_kurs_val_1, coin_kurs_val_2)
            coin_kurs_box.append(coin_kurs_arrow, coin_kurs_val_box)
            coin_kurs.append(coin_kurs_box, hr)
        }


        coin_name.innerHTML = item.currency.name
        coin_balans_1.innerHTML = (+item.balance).toLocaleString() + ` ` + item.currency.symbol
        coin_balans_2.innerHTML = "$" + (+item.balance * item.currency.values["USD"].price).toLocaleString()

        coin_cart.style.background = "linear-gradient(201deg, #6162D6 0%, #0F0B38 93.37%)"
        coin_logo_r1.style.background = `#5454BD`
        coin_logo_r2.style.background = `#4948A8`
        coin_logo_r2.style.opacity = `0.4`

        coin_balans.append(coin_balans_1, coin_balans_2)
        coin_logo_r1.append(coin_logo)
        coin_logo_r2.append(coin_logo_r1)
        coin_info.append(coin_logo_r2, coin_balans, coin_kurs)
        coin_cart.append(coin_name, coin_info)
        place.append(coin_cart)
    }
}






















