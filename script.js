console.log('I am JavaScript, I make sure your app is interactive')

// Application data or state

let count = 0
let result = ''

let url = 'https://api.adviceslip.com/advice'

// Fetch the necessary DOM elements
const btnDOM = document.querySelector('.btn')
const resultDOM = document.querySelector('.result')
const countDOM = document.querySelector('.count span')

// fetch functionality to only return data for the successful case
const fetchAdvice = async () => {
  result.innerHTML = `<div class="loading">Loading ...</div>`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    result.innerHTML = `<div class="error">Couldn't fetch data!</div>`
  }
}

/** --- Let's start the App with a start function --- */
const start = async () => {
  console.log("Let's fetch data")
  const data = await fetchAdvice()
  console.log(data)

  console.log("let's render data in the UI")
}

start()
