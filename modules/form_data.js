import { v4 as uuidv4 } from 'uuid';
import { postData, getData } from '/modules/http';

let inputs =  document.querySelectorAll('input')
let round = document.querySelector('.round')
let round_big = document.querySelector('.round_big')
let square = document.querySelector('.square')
let square_min = document.querySelector('.square_min')
let triangle = document.querySelector('.triangle')

const formSignUp = document.forms.signup
const formSignIn = document.forms.signin

let userData = JSON.parse(localStorage.getItem("email"))
const email = document.querySelector(".email")
email.value = userData
const frontBtn = document.querySelector('.thefront .btn_box .btn')
const formCard = document.querySelector('#formCard')
const backBtn = document.querySelector('.theback .btn_box .btn')

frontBtn.onclick = (e) => {
    e.preventDefault()
    formCard.classList.toggle('flipped')
}

backBtn.onclick = (e) =>{
    e.preventDefault()
    formCard.classList.toggle('flipped')
}


formSignIn.onsubmit = (e) => {
    e.preventDefault();

    let user = {
        id: uuidv4()
    }

    let fm = new FormData(formSignIn)

    fm.forEach((value, key) => {
        user[key] = value
    })

    for (const key in user) {
        const element = user[key]
        if (element === "") {
            return
        }
    }
   
    postData("/users", user)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                localStorage.setItem('email', JSON.stringify(user.email))
                location.assign('/')
            }
        })
}


formSignUp.onsubmit = (e) => {
    e.preventDefault();
    let formData = {}

    let fm = new FormData(formSignUp)

    fm.forEach((value, key) => {
        formData[key] = value
    })

    for (const key in formData) {
        const element = formData[key];
        if (element === "") {
            return
        }
    }

    getData('/users?email=' + formData.email)
        .then((res) => {
            let [user] = res.data

            if (user) {
                if (user.password === formData.password) {
                    delete user.password

                    localStorage.setItem('user', JSON.stringify(user))

                    location.assign('/')
                } else {
                    inputs.forEach(el => {
                        el.style.borderBottom = "2px solid red"  
                    })

                    round.style.animation = "shake 0.4s infinite"
                    round_big.style.animation = "shake 0.4s infinite"
                    square.style.animation = "shake 0.4s infinite"
                    square_min.style.animation = "shake 0.4s infinite"
                    triangle.style.animation = "shake 0.4s infinite"
                }
            } else {
                alert("сначала зарегистрируйтесь")
            }
        })
}