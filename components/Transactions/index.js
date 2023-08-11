import { v4 as uuidv4 } from 'uuid';
import { postData, getData, patchData } from "/modules/http.js";

const userData = JSON.parse(localStorage.getItem("user"))
const add_card_button = document.querySelector(".trangsictions_btn")
const modal = document.querySelector(".add-transaction-modal")
const close_modal = document.querySelectorAll(".transaction_close-modal")
const form = document.forms.transaction
const select = document.querySelector('#transaction_select')
const balanceCard = document.querySelector("#balance_trans")
const modal_inputs = form.querySelectorAll('input')
const modal_selects = form.querySelectorAll('select')
const btn = document.querySelectorAll('.act')
const analitic = document.querySelector('.big-box')
const arr = document.querySelectorAll('.item')
const all = document.querySelector('#all')
const red = document.querySelector('#red')
const green = document.querySelector('#green')

let arr_green = []
let arr_red = []

getData("/transactions?user_id=" + userData.id)
    .then(res => reload(res.data))

function reload(arr) {
    analitic.innerHTML = ''
    for (let i of arr) {
        let item = document.createElement('div')
        let leftBox = document.createElement('div')
        let lefts = document.createElement('div')
        let leftH1 = document.createElement('h1')
        let leftp = document.createElement('p')
        let circle = document.createElement('div')
        let circleImg = document.createElement('img')
        let right = document.createElement('div')
        let rigthImg = document.createElement('img')
        let rightp = document.createElement('p')

        let rightBox = document.createElement('div')
        let leftTwo = document.createElement('div')
        let span = document.createElement('span')
        let rightTwo = document.createElement('div')
        let button = document.createElement('button')


        item.classList.add('it')
        leftBox.classList.add('left_box')
        lefts.classList.add('lefts')
        circle.classList.add('circle')
        right.classList.add('right')

        rightBox.classList.add('right_box')
        leftTwo.classList.add('lefts')
        rightTwo.classList.add('right')

        leftH1.innerHTML = 'AM 01:16'
        leftp.innerHTML = '24 dec 2018'
        rightp.innerHTML = i.id
        button.innerHTML = 'Waiting'
        button.classList.add('item_button')

        analitic.append(item)
        item.append(leftBox, rightBox)
        leftBox.append(lefts, right)
        lefts.append(leftH1, leftp, circle)
        circle.append(circleImg)
        right.append(rigthImg, rightp)
        rightBox.append(leftTwo, rightTwo)
        leftTwo.append(span)
        rightTwo.append(button)

        if (i.status === "red") {
            span.innerHTML = '0.0085 GRC'
            button.style.background = "#F35050"
            button.innerHTML = 'Error'
            //rigthImg.src = '/public/Group 13.2red.png'
            //circleImg.src = '/public/Group 2.8money.png'

        } else if (i.status === "green") {
            span.innerHTML = '0.0085 BTC'

            button.style.background = "#00E8ACBF"
            button.innerHTML = 'Completed'
            //rigthImg.src = '/public/Group 13.2green.png'
            //circleImg.src = '/public/Vectorbitcoin.png'

        } else {
            span.innerHTML = '0.0085 BTC'

            //circleImg.src = '/public/Vectorbitcoin.png'
            button.style.background = "#32395E;"
            button.innerHTML = 'Waiting'
            //rigthImg.src = '/public/Group 13.2green.png'
        }



        btn.forEach((item) => {
            item.onclick = () => {
                btn.forEach(el => el.classList.remove("btn"))
                item.classList.add('btn')
            }
        })


        if (i.status === 'red') {
            arr_red.push(i)
        } else if (i.status === 'green') {
            arr_green.push(i)
        } else {
        }
    }


    green.onclick = () => {
        reload(arr_green.splice(0, 10))
        btn.classList.add('btn')

    }
    red.onclick = () => {
        reload(arr_red.splice(0, 10))
        btn.classList.add('btn')
    }
    all.onclick = () => {
        reload(ij)
        btn.classList.add('btn')
    }

}


getData("/wallets?user_id=" + userData.id)
    .then(res => {
        for (let card of res.data) {
            let opt = new Option(card.currency.name, JSON.stringify(card))
            select.append(opt)
        }
    })

select.oninput = () => {
    let selectedCard = JSON.parse(select.value)
    if (selectedCard) {
        balanceCard.innerHTML = `Balance: ${(+selectedCard.balance).toLocaleString()} ${selectedCard.currency.symbol}`
    } else {
        balanceCard.innerHTML = `Balance:`
    }
}




form.onsubmit = (e) => {
    e.preventDefault()

    let userTransaction = {
        id: uuidv4(),
        user_id: userData.id,
        date: new Date().toLocaleDateString('en-CA'),
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        userTransaction[key] = value
    })
    
    modal_selects.forEach(select => {
        if (select.value === '') {
            select.style.borderBottom = "1px solid red"
        } else {
            select.style.borderBottom = "1px solid green"
        }
    })
    modal_inputs.forEach(input => {
        if (input.value === '') {
            input.style.borderBottom = "1px solid red"
            input.focus()
        } else {
            input.style.borderBottom = "1px solid green"
        }
    })


    for (const key in userTransaction) {
        const element = userTransaction[key]
        if (element === "") {
            return
        }
    }
    let selectedCard = JSON.parse(userTransaction.currency)

    //if (selectedCard.balance < modal_inputs[0].value) {
    //    modal_inputs[0].style.borderBottom = "1px solid red"
    //}


    postData("/transactions", userTransaction)
        .then(res => {
            let newBalance = selectedCard.balance - userTransaction.balance
            if (res.status === 200 || res.status === 201) {
                patchData(`/wallets/${selectedCard.id}`, { balance: newBalance })
                    .then(() => {
                        getData("/transactions?user_id=" + userData.id)
                            .then(res => reload(res.data))
                    })
            }
        })
    form.reset()


    modal.classList.add("hidden")
    close(modal)
}


close_modal.forEach(item => {
    item.onclick = () => {
        close(modal)
    }
})

add_card_button.onclick = () => {
    modal.style.display = "block"
    modal.classList.remove("hidden")
    modal.classList.add("active")
}


function close(modal) {
    modal.classList.remove("active")
    modal.classList.add("hidden")
    setTimeout(() => {
        modal.style.display = "none"
    }, 1000);
    modal_inputs.forEach(input => {
        input.style.borderBottom = "1px solid #1288E8"
    })
    modal_selects.forEach(select => {
        select.style.borderBottom = "1px solid #1288E8"
    })
}