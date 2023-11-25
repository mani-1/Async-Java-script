

/*

A fetch() call is only rejected if the network request itself fails for some reason (host not found, no connection, server not responding, etc...).

Any result back from the server (404, 500, etc...) is considered a successful request from the promise point of view.

*/


// Async and await

// Note async function always return promise
const getTodos = async() => {
  const response = await fetch('./todos/todos1.json')
  // since only network error will be catched we are making validation for status
  if(response.status !== 200) {
    throw new Error('Cannt fetch data')
  }
  const data = await response.json()
  return data
}

getTodos().then((data) => {
  console.log('resolved:', data)
}).catch((err) => {
  console.log(err, err.message)
})