
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


// Callback hell

getTodos('./todos/todos1.json', (err, data) => {
  console.log(data)
  getTodos('./todos/todos2.json', (err, data) => {
    console.log(data)
    getTodos('./todos/todos3.json', (err, data) => {
      console.log(data)
    })
  })
})