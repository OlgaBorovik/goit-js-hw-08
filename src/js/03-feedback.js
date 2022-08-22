import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
// const emailInput = document.querySelector('feedback-form input')
const textarea = document.querySelector('feedback-form textarea')

const STORAGE_KEY = 'feedback-form-state'
const formData = {}

form.addEventListener('submit', onFormSubmit)
form.addEventListener("input", throttle(onTextInput, 1000))

populateText()

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value

    const message = evt.target.value;
    console.log(formData)

    localStorage.setItem(STORAGE_KEY, message)
}

function populateText() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        textarea.value = savedMessage
    }
}