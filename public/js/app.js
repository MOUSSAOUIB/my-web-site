console.log('client side js')


// const weatherForm = document.querySelector('form') // listener for the form 
// const search = document.querySelector('input')  // listener for the imput

// const messageOne = document.querySelector('#message-1')
// const messageTow = document.querySelector('#message-2')
// messageOne.textContent = 'My new text'


weatherForm.addEventListener('submit', (e) => {
 e.preventDefault() // prevent the app to refresh all time
 else {
 messageOne.textContent='the location is: '+data_response.location
 messageTow.textContent= 'the forecast data is:'+ data_response.data

 }
 })