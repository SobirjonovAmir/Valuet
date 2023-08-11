//import { getData, patchData } from './http';

//const form = document.forms.replenishment
//const selectFrom = document.querySelector('.style_select')
//const selectTo = document.querySelector('.style_select_two')
//const inputAmount = form.elements.balance
//const balanceCardFrom = document.querySelector(".balance-card")
//const balanceCardTo = document.querySelector(".balance-card_two")
//const userData = JSON.parse(localStorage.getItem("user"))

//const amountToSend = document.querySelector(".send")
//const chosenCardFrom = document.querySelector(".from_chosenCard")
//const chosenCardTo = document.querySelector(".to_chosenCard")
//let cards = []

//// amountToSend.innerHTML = inputAmount.value



//getData("/wallets?userId=" + userData.id)
//    .then(res => {
//        cards = res.data
//        for (let card of cards) {
//            let optFrom = new Option(card.currency, JSON.stringify(card))
//            let optTo = new Option(card.currency, JSON.stringify(card))
//            selectFrom.append(optFrom)
//            selectTo.append(optTo)
//        }
//    });

//selectFrom.oninput = () => {
//    let selectedCardFrom = JSON.parse(selectFrom.value);
//    if (selectedCardFrom) {
//        balanceCardFrom.innerHTML = `Balance: ${selectedCardFrom.balance}`;
    
//        // [...selectTo.options].forEach(option => {
//        //     option.disabled = option.value === selectFrom.value;
//        // });
//    } else {
//        balanceCardFrom.innerHTML = `Balance:`;
     
//        // [...selectTo.options].forEach(option => {
//        //     option.disabled = false;
//        // })
//    }
//}

//selectTo.oninput = () => {
//    let selectedCardTo = JSON.parse(selectTo.value);
//    if (selectedCardTo) {
//        balanceCardTo.innerHTML = `Balance: ${selectedCardTo.balance}`;

//        // [...selectFrom.options].forEach(option => {
//        //     option.disabled = option.value === selectTo.value;
//        // });
//    } else {
//        balanceCardTo.innerHTML = `Balance:`

//        // [...selectFrom.options].forEach(option => {
//        //     option.disabled = false;
//        // });
//    }
//}

//form.onsubmit = async (e) => {
//    e.preventDefault()

//    const fromCard = JSON.parse(selectFrom.value)
//    const toCard = JSON.parse(selectTo.value)
//    const amountToTransfer = +inputAmount.value

//    if (fromCard.balance - amountToTransfer < 0) {
//        alert('Недастаточно средств!')
//        // if(selectedCardFrom === selectedCardTo){
//        //     alert('Выберите другую карту!')
//        // }
//        return
//    }
    

//    const updatedFromCardData = { ...fromCard, balance: fromCard.balance - amountToTransfer }
//    const updatedToCardData = { ...toCard, balance: toCard.balance + amountToTransfer }

//    const patchResFrom = await patchData(`/wallets/${fromCard.id}`, updatedFromCardData)
//    const patchResTo = await patchData(`/wallets/${toCard.id}`, updatedToCardData)

//    if (patchResFrom.status === 200 && patchResTo.status === 200 || patchResFrom.status === 201 && patchResTo.status === 201) {
//        alert('Баланс успешно переведен!')
//        location.assign('/#exchange_')
//    } else {
//        alert('Произошла ошибка')
//    }

//    balanceCardTo.innerHTML = ""
//    balanceCardFrom.innerHTML = ""
//    form.reset()
//};
