
function getTodos(url, callback) {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      // convert json for reald js  array of object
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if (request.readyState === 4) {
      callback('Oops, sry not able to fetch data')
    }
  })

  request.open('GET', url)
  request.send()
}


// Promise example

function getSomething () {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve('Some data')
    // reject('Some error')
  })
}

// One way of calling resolve and reject as first and second param
getSomething().then((data) => {
  console.log(data)
},
(err) => {
  console.log(err)
}
)

// Efficient way of calling resolve and reject using then and catch block
getSomething().then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})