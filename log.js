"use strict!"

const username = document.getElementById('username')
const password = document.getElementById('password')
const loginbtn = document.getElementById('login-btn')

loginbtn.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})