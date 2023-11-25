
// Note: for fecth api even for 404 will be resolved only network error will be catched in catch block
fetch('./todos/todos1.json').then((res) => {
  return res.json() // this is a promise
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})