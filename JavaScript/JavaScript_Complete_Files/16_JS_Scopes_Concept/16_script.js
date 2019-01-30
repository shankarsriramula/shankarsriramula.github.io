// Function Scoping
let a = 10;
let outerFn = () => {
    let b = 20;
    let innerFn = () => {
        let c = 30;
        let d = 40;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
        console.log(d); // 40
    };
};

// IIFE example
let calc = (() => {
    return {
        sum : function(a , b) {
            return a + b;
        },
        sub : function(a , b) {
            return a - b;
        },
        mul : function(a , b) {
            return a * b;
        },
        div : function (a, b) {
            return a / b ;
        }
    };
})();

console.log(`The Sum : ${calc.sum(10 , 20)}`);
console.log(`The Sub : ${calc.sub(10 , 20)}`);
console.log(`The Mul : ${calc.mul(10 , 20)}`);
console.log(`The Div : ${calc.div(10 , 20)}`);

// Call back Functions
let x = () => {
    console.log('Iam from first Function');
};

let y = (callback) => {
    callback();
    console.log('Iam from Second Function');
};

let z =(callback) => {
    callback();
    console.log('Iam from Third Function');
};
z(x,y);

// Actual Callback Function
let sum = (a , b) => {
    return a + b;
};
let mul = (a , b) => {
    return a * b;
};
let div = (a , b) =>{
    return a / b;
};

let calculate = (a , b , callback) => {
    return callback(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,div));
console.log(calculate(10,20,(a , b) => {
    return a - b;
}));
console.log(calculate(10,20,(a , b) => {
    return a * b;
}));

// arrays
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Sr.Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        designation : 'Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        designation : 'Software Engineer',
        active : false
    }
];

let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

// Promises
let doTask = new Promise((resolve,reject) => {
    // doing the task
    let isDone = false;
    if(isDone){
        resolve('Task is Done');
    }
    else{
        reject('Task is Not Done');
    }
});

doTask.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Compilation & Interpretation


