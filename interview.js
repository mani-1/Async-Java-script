
// Only resolve
const sub = Promise.resolve('resolved successfuly')
sub.then((data) => {
  console.log(data)
})

// Only reject
const sub2 = Promise.reject('reject successfuly')
sub2.then((data) => {
  console.log(data)
})

// async with call back 

function importantAction(cb) {
  setTimeout(() => {
    cb('action taken')
  }, 1000)
}

function likeVideo(cb) {
  setTimeout(() => {
    cb('like the video')
  }, 1000)
}

function shareVideo(cb) {
  setTimeout(() => {
    cb('share the video')
  }, 1000)
}

importantAction((message) => {
  console.log(message)
  likeVideo((message) => {
    console.log(message)
    shareVideo((message) => {
      console.log(message)
    })
  })
})


// async with promise with promise chain


function importantAction() {
  return new Promise((resolve, reject) => {
    resolve('action taken')
  })
}

function likeVideo() {
  return new Promise((resolve, reject) => {
    resolve('like the video')
  })
}

function shareVideo() {
  return new Promise((resolve, reject) => {
    resolve('share the video')
  })
}

importantAction().then((message1) => {
  console.log('resolved Promise1:', message1)
  return likeVideo()
}).then((message2) => {
  console.log('resolved Promise2:', message2)
  return shareVideo()
}).then((message3) => {
  console.log('resolved promise3:', message3)
})



// Promise Combinator

// Promise.all if any one promise is failed then it will be moved to catch block
Promise.all([
  importantAction(),
  likeVideo(),
  shareVideo()
]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})

// Promise.race the first resolved or reject will be executed

Promise.race([
  importantAction(),
  likeVideo(),
  shareVideo()
]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})


// Promise.allSettled even one/all is failed it will be in fullfiled
Promise.allSettled([
  importantAction(),
  likeVideo(),
  shareVideo()
]).then((res) => {
  console.log(res)
})


// Promise.any it will ignore the reject and only execute the first fullfiled one but if all failed then it will be rejected

Promise.any([
  importantAction(),
  shareVideo(),
  likeVideo()
]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})