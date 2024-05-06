// // TYPE 1

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async resolved")
// })

// //TYPE2


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

//TYPE4


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Nitesh", email: "nitesh@gmail.com" })
        } else {
            reject("somethings went wrong")
        }
    }, 1000)


})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);
    })
    .catch((er) => {
        console.log(er);
    })
    .finally(() => {
        console.log("promise either resolve or rejected");
    })




//TYPE 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "JAVASCRIPT", email: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const reponse = await promiseFive;
        console.log(reponse)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();

//TYPE 6
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}


// type 7

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err=>{
    console.log(err)
}))
