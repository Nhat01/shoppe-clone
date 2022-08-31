const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const registerBtns = $$('#registerBtn')
const registerForm = $('#register-form')
const loginBtns = $$('#loginBtn')
const loginForm = $('#login-form')
const modal = $('.modal')
const backBtns = $$('.auth-form__control-back')
const switchBtn = $$('.auth-form__switch-btn')
const notifyList = $('.header__notify')
const noSignNotify = $('.header__notify-no-sign')
const searchOptions = $$('.header__search-option-item')



function hideModal() {
    modal.style.display = 'none'
}

for (let registerBtn of registerBtns) {
    function showRegisterForm() {
        registerForm.style.display = 'block'
        loginForm.style.display = 'none'
    }
    registerBtn.addEventListener('click', () => {
        showModal()
        showRegisterForm()
    })
    registerForm.addEventListener('click', (e) => {
        if (e.target === switchBtn[0]) {
            showLoginForm()
        }
        e.stopPropagation()
    })

}

for (let loginBtn of loginBtns) {
    function showLoginForm() {
        registerForm.style.display = 'none'
        loginForm.style.display = 'block'
    }
    loginBtn.addEventListener('click', () => {
        showModal()
        showLoginForm()
    })
    loginForm.addEventListener('click', (e) => {
        if (e.target === switchBtn[1]) {
            showRegisterForm()
        }
        e.stopPropagation()
    })
    
}


function showModal() {
    modal.style.display = 'flex'
}


for (let backBtn of backBtns) {
    backBtn.addEventListener('click', hideModal)
}

modal.addEventListener('click', hideModal)




