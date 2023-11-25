/*

A fetch() call is only rejected if the network request itself fails for some reason (host not found, no connection, server not responding, etc...).

Any result back from the server (404, 500, etc...) is considered a successful request from the promise point of view.

*/



// Note: for fecth api even for 404 will be resolved only network error will be catched in catch block
fetch('./todos/todos1.json').then((res) => {
  return res.json() // this is a promise
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})