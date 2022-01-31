// ###############  topic1:Fat arrow function  ##################

//example of fat arrow function 
//arrow function dont care about this keyword
//if you want to get the this value in this case use normal function by avoiding ()=> {} arrow function or use a vasriable to get value of this 
//before arrow function like comment no #2
const js = {
  name: "javascript",
  libreries: ["react","angular","vue"],
  printLib:function(){
      // #2 
      //let self = this.name;

       this.libreries.forEach((lib)=>{
       console.log(`${this.name} loves ${lib}`);
    });
  }
}

js.printLib();


//##########  topic2: truthy and falsy #################


//false,0,NaN,undefine,"",null all of this are like falsy value

var myvar =""; //change here and see what is the output

if (myvar){  //here this myvar is checking variable which is checking the value is false or true
  console.log("this is true");

}else{
  console.log("this is falsy");
}


//##############  topic3:ternary operator  ##################

var age = 19;
var ternary = (age>=18) ? "adult" : "under age"; //this is the ternary operator
console.log(ternary);

//if this is true or false in ternary condition you have just write the variable ..it will check the true or false value 
var value = false;

var access = value;
console.log(access);

//############# topic4 : Array.find() method ###############

//lets create an array 

let number  = [1,2,3,4,5,6,7,8,9,10];

//if the function inside find function return true 
//the searching will be stop there 
//this mainly used for finding a particuler element from an array
//array.find(function(currentvalue,currIndex,whole_array){})
//it will not change the main array 
//also get this key keyword which carry the value inside the function
//when use arrow function it dont care about the this keyword

let result=number.find(function(cv){
   return cv>7;
});
console.log(result);


