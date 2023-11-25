
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
// promise chain
getTodos('./todos/todos1.json').then((data) => {
  console.log('promise 1 resolved:', data)
  return getTodos('./todos/todos2.json')
}).then((data) => {
  console.log('promise 2 resolved:', data)
  return getTodos('./todos/todos3.json')
}).then((data) => {
  console.log('promise 3 resolved:', data)
}).catch((err) => {
  console.log(err)
})