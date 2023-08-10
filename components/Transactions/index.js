// import { v4 as uuidv4 } from 'uuid';
import { postData, getData, patchData } from "/modules/http.js";


let ij = [
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",

    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "red"
    },
    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "defoult",
    },

    {
        id: "kjdgydsgkjhdsgiukhdfgkjdsfhngdfabg",
        status: "green"
    },
]
let a = document.querySelector('.scroll-down a')
let btn = document.querySelectorAll('.act')
let analitic = document.querySelector('.big-box')
let arr = document.querySelectorAll('.item')
let all = document.querySelector('#all')
let red = document.querySelector('#red')
let green = document.querySelector('#green')

let  arr_green = []
let  arr_red = []


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
            rigthImg.src = '/public/Group 13.2red.png'
            circleImg.src = '/public/Group 2.8money.png'

        } else if (i.status === "green") {
            span.innerHTML = '0.0085 BTC'

            button.style.background = "#00E8ACBF"
            button.innerHTML = 'Completed'
            rigthImg.src = '/public/Group 13.2green.png'
            circleImg.src = '/public/Vectorbitcoin.png'

        } else {
            span.innerHTML = '0.0085 BTC'

            circleImg.src = '/public/Vectorbitcoin.png'
            button.style.background = "#32395E;"
            button.innerHTML = 'Waiting'
            rigthImg.src = '/public/Group 13.2green.png'
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
reload(ij)


const add_card_button = document.querySelector(".trangsictions_btn")
const modal = document.querySelector(".add-transaction-modal")
const close_modal = document.querySelectorAll(".transaction_close-modal")


const add_trans_form = document.forms.transaction
const select = document.querySelector('#transaction_select')
const userData = JSON.parse(localStorage.getItem("user"))
let balanceCard = document.querySelector("#balance_trans")

let cards = []

function ckeckTotal(input, isBool) {
    input.style.borderBottom = isBool ? '1px solid green' : '1px solid red'
}

function warning(elementP, message) {
    const warningElement = document.querySelector(elementP)
    warningElement.textContent = message
}




getData("/wallets?user_id=" + userData.id)
    .then(res => {
        cards = res.data
        for (let card of cards) {
            let opt = new Option(card.name, JSON.stringify(card))
            select.append(opt)
        }
    })

    select.oninput = () => {
        let selectedCard = JSON.parse(select.value)
        if (selectedCard) {
            balanceCard.innerHTML = `Balance card: ${selectedCard.balance}`
        } else {
            balanceCard.innerHTML = `Balance card:`
        }
    }




add_trans_form.onsubmit = (e) => {
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

    let selectedCard = JSON.parse(form.wallet.value)
    let price = +form.total.value

    if (selectedCard && selectedCard.balance >= price) {
        userTransaction.wallet = selectedCard
        userTransaction.wallet_id = selectedCard.id
        userTransaction.total = price

        postData("/transactions", userTransaction)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    
                    const newBalance = selectedCard.balance - price
                    patchData(`/wallets/${selectedCard.id}`, { balance: newBalance })
                        .then(patchRes => {
                            if (patchRes.status === 200) {
                                location.assign('/components/donik/')
                            }
                        })       
                }
            })

        form.reset()
    } else {
        alert('Недостаточно средств')
    }

    modal_inputs.forEach(input => {
        if (input.value === '') {
            input.focus()
            input.style.borderBottom = "1px solid red"
        } else {
            input.style.borderBottom = "1px solid green"
        }
    })
    modal_selects.forEach(select => {
        if (select.value === '') {
            select.style.borderBottom = "1px solid red"
        } else {
            select.style.borderBottom = "1px solid green"
        }
    })
    modal.classList.add("hidden")
    close(modal)
}

/* 


add_trans_form.total.oninput = () => {
    let selectedCard = JSON.parse(form.wallet.value)
    let price = +form.total.value

    if (selectedCard) {
    
        if (selectedCard.balance >= price) {
            warning('#wallet-warning', '')
            ckeckTotal(form.wallet, true)
        } else {
            warning('#wallet-warning', 'Недостаточно средств')
            ckeckTotal(form.wallet, false)
        }

        if (price > 0) {
            warning('#total-warning', '')
            ckeckTotal(form.total, true)
        } else {
            warning('#total-warning', 'Введите сумму больше нуля!')
            ckeckTotal(form.total, false)
        }
    } else {
        warning('#wallet-warning', 'Выберите карточку!')
        ckeckTotal(form.wallet, false)
        warning('#total-warning', '')
        ckeckTotal(form.total, true)
    }

}
   
 */
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

console.log(analitic);