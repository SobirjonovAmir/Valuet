export function reload_card(place, array) {
    place.innerHTML = ""
    for (const item of array) {
        console.log(item);
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

            if (item.currency.values["USD"].percentChange30d > 0) {
                coin_kurs_val_1.innerHTML = `$ ${(1200).toLocaleString()} = ${(1200 / item.currency.values["USD"].price).toLocaleString()} ${(item.currency.symbol).toLowerCase()}`
                coin_kurs_val_2.innerHTML = `1 ${item.currency.symbol} = $ ${(item.currency.values["USD"].price).toLocaleString()} `
                coin_kurs_arrow.src = "/public/up.svg"
                
            } else {
                coin_kurs_val_1.innerHTML = `$ ${(1200).toLocaleString()} = ${(1200 / item.currency.values["USD"].price).toLocaleString()} ${(item.currency.symbol).toLowerCase()}`
                coin_kurs_val_2.innerHTML = `1 ${item.currency.symbol} = $ ${(item.currency.values["USD"].price).toLocaleString()} `
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






















