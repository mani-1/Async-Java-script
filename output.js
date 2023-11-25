// 1. What is the output ?
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

promise1.then((res) => {
  console.log(res)
})

console.log('end')

// 2. What is the output
console.log('start')

const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
  })
}

console.log('middle')

fn().then((res) => {
  console.log(res)
})

console.log('end')

//3. What is the output

function job() {
  return new Promise((resolve, reject) => {
    reject('rejected')
  })
}

const promise = job()

promise.then(() => {
  console.log('success 1')
})
.then(() => {
  console.log('success 2')
})
.then(() => {
  console.log('success 3')
})
.catch((err) => {
  console.log(err)
})
.then(() => {
  console.log('success 4')
})

//4. what is output

function job(state) {
  return new Promise((resolve, reject) => {
    if(state) {
      resolve('promise resolved success')
    } else {
      reject('promise failed')
    }
  })
}

const promise2 = job(true)

promise2.then((res) => {
  console.log(res)
  return job(false)
})
.catch((error) => {
  console.log(error)
  return "Error caught" // This will be considered as a fulfilled promise
})
.then((data) => {
  console.log(data)
  return job(true)
})
.catch((error) => {
  console.log(error)
})


// 5. What is the output 

function job(state) {
  return new Promise((resolve, reject) => {
    if(state) {
      resolve('success')
    } else {
      reject('error')
    }
  })
}

const result = job(true)

result.then((data) => {
  console.log(data)
  return job(true)
})
.then((data) => {
  if (data !== 'Victory') {
    throw 'Defeat'
  }
  return job(true)
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
  return job(false)
})
.then((data) => {
  console.log(data)
  return job(true)
})
.catch((error) => {
  console.log(error)
  return 'Error Caught'
})
.then((data) => {
  console.log(data)
  return new Error('test') // Tricky one this is a normal text (fulfilled promise)
})
.then((data) => {
  console.log('Success:', data.message)
})
.catch((data) => {
console.log('Error:', data.message)
})

// 6. Solve promise using recursively

function promiseRecursive(promiseList) {
  let currentPromise = promiseList.shift()
  currentPromise.then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  promiseRecursive(promiseList)
}

promiseRecursive([promise1, promise2, promise3])