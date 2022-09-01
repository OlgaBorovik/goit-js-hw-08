import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const textarea = document.querySelector('textarea')
const email = document.querySelector('input')

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
    console.log(formData)
    const formDataJSON = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY, formDataJSON)
}

function populateText() {
    const savedData= localStorage.getItem(STORAGE_KEY)
    // console.log(savedData)
    
    if (savedData) {
        const savedDataParse = JSON.parse(savedData)
        email.value = savedDataParse.email
        textarea.value = savedDataParse.message
    }
}
