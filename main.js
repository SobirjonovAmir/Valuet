import { spendings_chart, market_chart } from "/components/charts/index.js"
import { reload_card } from "/components/coin_card/index.js"
import { reload_balance } from "/components/balance/index.js"
import { creat_market_cart } from "/components/market_cart/index.js"
import { v4 as uuidv4 } from 'uuid';
import { postData, getData } from '/modules/http';
import { useHTTP } from "./modules/http.request";

const pageBtns = document.querySelectorAll('[data-page]')
const pages = document.querySelectorAll('.page')
const add_card_button = document.querySelector("#add_widgets")
const modal = document.querySelector(".add-card-modal")
const close_modal = document.querySelectorAll(".close-modal")
const add_card_form = document.forms.card
const balance = document.querySelector('#balanceChart')
const balance_ = document.querySelector('#balanceChart_')
const spending = document.querySelector('#spendingsChart').getContext('2d')
const market = document.querySelector('#marketChart').getContext('2d')
const walletsChart = document.querySelector('#walletsChart').getContext('2d')
const widgets_box = document.querySelector(`.widgets-box`)
const userData = JSON.parse(localStorage.getItem("user"))


pages.forEach(page => {
	if (location.hash.split('-').join('').includes(page.id)) {
		pages.forEach(page => page.classList.remove('show-page'))
		page.classList.add('show-page')
		pageBtns.forEach(btn => {
			if (btn.getAttribute("data-page") == page.id) {
				pageBtns.forEach(btn => btn.classList.remove('active'))
				btn.classList.add('active')
			}
		});
	}
})

pageBtns.forEach(btn => {
	btn.onclick = () => {
		const id = btn.getAttribute('data-page')

		pageBtns.forEach(btn => btn.classList.remove('active'))
		pages.forEach(page => {
			if (id === page.id) {
				page.classList.add('show-page')
			} else {
				page.classList.remove('show-page')
			}
		})
		btn.classList.add('active')
	}
});





let spending_data = [1006, 1004, 1007, 1008, 1004, 1009, 1011, 1012]
let spending_labels = ['2', '4', '6', '8', '10', '12', "14", "16"]


let market_data = [1006, 12004, 2007, 18008, 2004, 15009, 1011, 12212]

reload_balance(balance)
reload_balance(balance_)
spendings_chart(spending, spending_data, spending_labels)
market_chart(market, market_data, spending_labels, false)



getData("/wallets")
	.then(res => reload_card(widgets_box, res.data))


const currentDate = new Date();
const formattedDate = formatDate(currentDate);
document.querySelector("#overview_date").innerHTML = formattedDate
let news_box = document.querySelector(".recent-news-box__content")

let news_arr = [
	{
		"title": "afsasaf",
		"date": "aasfasf"
	}
]

reload_news(news_arr, news_box)
function reload_news(arr, place) {
	for (const item of arr) {
		const div = document.createElement("div")
		const span = document.createElement("span")
		const p = document.createElement("p")

		span.innerHTML = item.date
		p.innerHTML = item.title


		div.append(span, p)
		place.append(div)
	}
}



function formatDate(date) {
	const options = { weekday: 'long', month: 'long', day: 'numeric', };
	return new Intl.DateTimeFormat('en-US', options).format(date);
}


const modal_inputs = document.querySelectorAll('.modal input')
const modal_selects = document.querySelectorAll('.modal select')


const { request, loading, error } = useHTTP()

for (let i = 1; i <= 10; i++) {
	request('https://api.cryptorank.io/v1/currencies/' + i)
		.then(res => {
			let opt = new Option(res.data.name, JSON.stringify(res.data))
			modal_selects[0].append(opt)
		})
}

add_card_form.onsubmit = (e) => {
	e.preventDefault()


	let card = {
		id: uuidv4(),
		userId: userData.id,
		date: new Date().toLocaleDateString('en-CA'),
	}

	let fm = new FormData(e.target)

	fm.forEach((value, key) => {
		card[key] = value
	})

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

	for (const key in card) {
		const element = card[key]
		if (element === "") {
			return
		}
	}

	card.currency = JSON.parse(card.currency)
	card.currency = JSON.stringify(card.balance)

	delete card.currency.tokens


	postData("/wallets", card)
		.then(() => {
			getData("/wallets?userId=" + userData?.id)
				.then(res => reload_card(widgets_box, res.data))
		})

	modal.classList.add("hidden")

	close(modal)

	e.target.reset()
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



const scrollButton = document.querySelector(".scroll-down__box");
const content = document.querySelector(".recent-news-box__content");
let lastScrollPosition = content.scrollTop;

scrollButton.addEventListener("click", function () {
	const lastElement = content.lastElementChild;
	if (lastElement) {
		lastElement.scrollIntoView({ behavior: "smooth", block: "end" });
	}
});

content.addEventListener("scroll", function () {
	const currentScrollPosition = content.scrollTop;
	const lastElement = content.lastElementChild;
	if (lastElement) {
		if (currentScrollPosition > lastScrollPosition) {
			scrollButton.parentElement.style.display = "none";
		} else {
			scrollButton.parentElement.style.display = "flex";
		}

		lastScrollPosition = currentScrollPosition;
	}
});




let wallets_labels = ["June", "July", "August", "September", "October"]

market_chart(walletsChart, market_data, wallets_labels, true)



let market_cart_arr = ["DASH", "Aeternity", "Ethereum", "PeerCoin", "BitCoin", "GridCoin", "NavCoin", "LiteCoin", "Nano"]
let market_box = document.querySelector(".market_box")



if (localStorage.getItem("marcet_cart")) {
	creat_market_cart(market_cart_arr, market_box, "market_arr")
	console.log(JSON.parse(localStorage.getItem("marcet_cart")));
}
else {
	let market_carts_arr = []
	for (let i = 1; i < 10; i++) {
		request('https://api.cryptorank.io/v1/currencies/' + i)

			.then(res => {
				let item = res.data
				delete item.category
				delete item.circulatingSupply
				delete item.lastUpdated
				delete item.maxSupply
				delete item.rank
				delete item.token
				delete item.totalSupply
				delete item.type
				delete item.volume24hBase

				market_carts_arr.push(item)
				if (i === 9) {
					localStorage.setItem("marcet_cart", JSON.stringify(market_carts_arr))
				}
			})
	}
}


