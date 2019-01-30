const technologies = ['HTML','CSS','JavaScript'];

// for-in ES5 version
for(let index in technologies){
    console.log(technologies[index]);
}

// for-of ES6 version
for(let value of technologies){
    console.log(value);
}