 function header_aside(){
    let box = document.querySelector("#app") 
    let aside = document.querySelector("aside") 
    let nav = document.querySelector("nav") 
    let a_home = document.createElement("a") 
    let a_overview = document.createElement("a") 
    let a_wallets = document.createElement("a") 
    let a_transaction = document.createElement("a") 
    let a_exchange = document.createElement("a") 
    let a_market = document.createElement("a") 
    let hr = document.createElement("hr") 
    let a_user = document.createElement("a") 
    let a_logout = document.createElement("a")

    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    let span4 = document.createElement("span")
    let span5 = document.createElement("span")
    let span6 = document.createElement("span")
    let span7 = document.createElement("span")

    let main_box = document.querySelector("main") 
    let container = document.querySelector(".container") 
    let header = document.querySelector("header") 
    let header_left = document.createElement("div") 
    let search_box = document.createElement("div") 
    let form = document.createElement("form") 
    let input = document.createElement("input") 
    let btn = document.createElement("button") 
    let btn_span = document.createElement("span")  
    let header_right = document.createElement("div") 
    let notice = document.createElement("div") 
    let mail_box = document.createElement("div") 
    let bell_box = document.createElement("div") 
    let img_mail = document.createElement("img") 
    let img_bell = document.createElement("img") 

    a_home.id = "home"
    a_overview.href = "#overview_"
    a_wallets.href = "#wallets_"
    a_transaction.href = "#transaction_"
    a_exchange.href = "#exchange_"
    a_market.href = "#market_"
    hr.id = "bottom"
    a_user.href = "#"
    a_logout.href = "./auth/"
    a_logout.onclick = () => {
        localStorage.removeItem('user')
    }

    a_overview.setAttribute('data-page', 'overview')
    a_wallets.setAttribute('data-page', 'wallets')
    a_transaction.setAttribute('data-page', 'transaction')
    a_exchange.setAttribute('data-page', 'exchange')
    a_market.setAttribute('data-page', 'market')

    a_home.innerHTML = "VALUET"
    a_overview.innerHTML = "Overview"
    a_wallets.innerHTML = "Wallets"
    a_transaction.innerHTML = "Transactions"
    a_exchange.innerHTML = "Exchange"
    a_market.innerHTML = "Market"
    let userData = JSON.parse(localStorage.getItem("user"))
    a_user.innerHTML = `${userData.firstName} ${userData.lastName}`
    a_logout.innerHTML = "Log out"
    a_overview.classList.add("active")

    span1.classList = "material-symbols-outlined"
    span2.classList = "material-symbols-outlined"
    span3.classList = "material-symbols-outlined"
    span4.classList = "material-symbols-outlined"
    span5.classList = "material-symbols-outlined"
    span6.classList = "material-symbols-outlined"
    span7.classList = "material-symbols-outlined"

    span1.innerHTML = "apps"
    span2.innerHTML = "wallet"
    span3.innerHTML = "receipt_long"
    span4.innerHTML = "currency_exchange"
    span5.innerHTML = "insert_chart"
    span6.innerHTML = "account_circle"
    span7.innerHTML = "logout"

    header_left.classList = "left"
    search_box.classList = "search"
    form.action="#"
    input.type="search"
    btn_span.classList = "material-symbols-outlined"
    btn_span.innerHTML = "search"
    header_right.classList = "right"
    notice.classList = "notice"
    mail_box.classList = "mail"
    img_mail.src = "./public/mail-icon.svg"
    bell_box.classList = "bell"
    img_bell.src = "./public/bell.svg"

    box.append(aside, main_box)
    aside.append(nav)
    nav.append(a_home, a_overview, a_wallets, a_transaction, a_exchange, a_market, hr, a_user, a_logout)
    a_overview.prepend(span1)
    a_wallets.prepend(span2)
    a_transaction.prepend(span3)
    a_exchange.prepend(span4)
    a_market.prepend(span5)
    a_user.prepend(span6)
    a_logout.prepend(span7)
    main_box.append(container)
    header.append(header_left, header_right)
    header_left.append(search_box)
    search_box.append(form)
    form.append(input, btn)
    btn.append(btn_span)
    header_right.append(notice)
    notice.append(mail_box, bell_box)
    mail_box.append(img_mail)
    bell_box.append(img_bell)
    
    container.prepend(header)
}
header_aside()