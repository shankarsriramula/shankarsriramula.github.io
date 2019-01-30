// Closures Concept of JavaScript
let someTask = (success,fail) => {
    let isDone = false;
    if(isDone){
        success('Task is Done');
    }
    else{
        fail('Task is NOT Done');
    }
};

someTask((success) => {
    console.log(success);
} , (failed) => {
    console.log(failed);
});

let doTask = new Promise((resolve,reject) => {
    let isDone = true;
    let emp1 = {
        name : 'Rajan',
        age : 25
    };
    let emp2 = {
        name : 'Wilson',
        age : 45
    };
    if(isDone){
        resolve(emp1);
    }
    else{
        reject(emp2);
    }
});

doTask.then((resolve) => {
    console.log(resolve);
}).catch((reject)=> {
    console.log(reject);
});

