const status = true;

console.log("task 1");


//syntex of promise in js
//this take two parameter as function 
//they works like if else condition in function and callback function 
const promise = new Promise(function(resolve , reject) {
  setTimeout(function(){
    if (status){
      resolve();
    }else{
      reject();
    }
  },3000);
});
console.log("task 3");