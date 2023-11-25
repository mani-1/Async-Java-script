const request =  new XMLHttpRequest()


request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  } else if (request.readyState === 4) {
    console.log('Oops! sry cannot able to fecth data')
  }
})

// Ready state 0 before open call

// Ready state 1
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// Ready state 2
request.send()

// Ready state 3 - downloading, got the partial data

// Ready state 4 - Full downloaded data


/**

  Status code

  Range 100 < 200  information response
  Range 200 < 300  Successful response
  Range 300 < 400  Redirection message
  Range 400 < 500  Erorr from client 
  Range 500        Error from server
 */