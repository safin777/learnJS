const status = true;

console.log("task 1");


//syntex of promise in js
//this take two parameter as function 
//they works like if else condition in function and callback function 
//promise define like asyncronus task
const promise = new Promise(function(resolve , reject) {
  setTimeout(function(){
    if (status){
      resolve("succes");
    }else{
      reject("failed");
    }
  },3000);
});

//calling the promised statement like this section 
//promise calling

promise
   .then(function(vlaue){
     console.log(vlaue);
   })
   .catch(function(err){
     console.log(err);
   })
console.log("task 3");

//this is mainly use for standerized the callback function coding which is 
//simply zigzag :-)
