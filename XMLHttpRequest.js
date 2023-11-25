
function getTodos(url) {

 return  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        // convert json for reald js  array of object
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if (request.readyState === 4) {
        reject('Oops, sry not able to fetch data')
      }
    })
    
    request.open('GET', url)
    request.send()
  })
}

getTodos('./todos/todos1.json').then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})