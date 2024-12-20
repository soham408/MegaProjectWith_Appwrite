const promiseOne = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // console.log('async task is compliterated');
    resolve();
  }, 3000);
});

promiseOne.then(function() {
    // console.log('promiseOne is resolved');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('async task 2 is compliterated');
        resolve();
    }, 1000);
}).then(function(){
    // console.log('promiseTwo is resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "soham" , age: 23});
    }, 1000)
}).then(function(user){
    // console.log(user);
    
})

// promiseThree.then(function(user){
// console.log(user);

// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "soham", age: 23});
        } else {
            reject("error: something went wrong");
        }
    }, 1000)
    })
    
    promiseFour.then(function(user){
        // console.log(user);
        return user.username;
       }).then(function(username){
        //    console.log(username);
       }).catch(function(error){
        //    console.log(error);
    }).finally(function(){
        // console.log('finally');
    })
    

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;
            if(!error){
                resolve({username: "javascript", age: 25});
            } else {
                reject("error: javascript went wrong");
            }
        })
    })

async function consumePromiseFive (){
   
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
        
    }
}

consumePromiseFive()

// API 

// async function getAPIdata(){
//    try {
//     const apiresponce = await fetch('https://api.github.com/users/soham408')
//     const data = apiresponce.json()
//     console.log(apiresponce);
    
//    } catch (error) {
//     console.log("err: ", error);
    
//    }
// }

// getAPIdata()

fetch('https://api.github.com/users/soham408')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    
})
.catch(function(){
    console.log('error');
})