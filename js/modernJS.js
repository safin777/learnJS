// ###############  topic1:Fat arrow function  ##################

//example of fat arrow function
//arrow function dont care about this keyword
//if you want to get the this value in this case use normal function by avoiding ()=> {} arrow function or use a vasriable to get value of this
//before arrow function like comment no #2
const js = {
    name: "javascript",
    libreries: ["react", "angular", "vue"],
    printLib: function () {
        // #2
        //let self = this.name;

        this.libreries.forEach((lib) => {
            console.log(`${this.name} loves ${lib}`);
        });
    },
};

js.printLib();

//##########  topic2: truthy and falsy #################

//false,0,NaN,undefine,"",null all of this are like falsy value

var myvar = ""; //change here and see what is the output

if (myvar) {
    //here this myvar is checking variable which is checking the value is false or true
    console.log("this is true");
} else {
    console.log("this is falsy");
}

//##############  topic3:ternary operator  ##################

var age = 19;
var ternary = age >= 18 ? "adult" : "under age"; //this is the ternary operator
console.log(ternary);

//if this is true or false in ternary condition you have just write the variable ..it will check the true or false value
var value = false;

var access = value;
console.log(access);

//############# topic4 : Array.find() method ###############

//lets create an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//if the function inside find function return true
//the searching will be stop there
//this mainly used for finding a particuler element from an array
//array.find(function(currentvalue,currIndex,whole_array){})
//it will not change the main array
//also get this key keyword which carry the value inside the function
//when use arrow function it dont care about the this keyword

let result = number.find(function (cv) {
    return cv > 7;
});
console.log(result);

// array filter()
//array findIndex()

//array slice()//this method cut out value from an array
//to find the value 5
console.log("find the value of 5 with slice() method from array: \n");
let slice = number.slice(4, -5);
console.log(slice);

//splice means connecting array
//to cut out a particuler elements from array
//take 3 parameter (where to cut,how many want to cut ,which thing want to add)
//it change the main array

//#########array concat()###############

//this method add two or multiple array and return a new array
//do not change the main array

//###########  array.push() #################
//insert element to an array and change the main array

//########### array.map() #############
//most used and important method in array
//work like a for loop
//travers each element of an array and can take action on each of the element of the array
//it has call back function inside the method
//do not change the main array

let x = number
    .map(function (ele) {
        return ele * 2;
    })
    .join("\n");

console.log(x);
console.log(number);

//################### array.reduce()  #####################

//for in can run on object and travars in the object //inside arry its retuen the index number
//for of can travers any iterable object //in array it returns the array element
console.log("This is exmple of ForOf:");
for (element of number) {
    console.log(element);
}

console.log("This is exmple of ForIn:");
for (items in number) {
    console.log(items);
}


//accessing object key and value from object pro tricks 
//returning an array 


let myobb = {
  name : " sayed islam ",
  subject: "CSE",
  loveToDo: "Programming"
}

let keys = Object.keys(myobb);
console.log(keys);

let values = Object.values(myobb);
console.log(values);

let entries = Object.entries(myobb)
console.log(entries);


//function default 
//it will bydeafult take a value inside func if you do not pass a value inside a function 


//###################spread operator ##################

 let sage = [2,4,6,7,8];

 let newAge = [...sage,0,11,34,54,645,543] //the ... is the spread operator 
 //this is mainly used for get the value of others array 
 //to make a cory array not to change the main array
 //it also works in object
 console.log("using spread operator the new arraY is:");
 console.log(newAge);


 //############## Rest operator ###################
 //when we use  ... in the parameter inside a function then it is called rest operator
 //when we want to send unlimited value by using only a single argumnets and return like array then we use rest-op inside a function
//we use (...anyVariableName);
//it should be use as a last parameter if we use multiple args
 console.log("Example of rest operator");

 function restOp (...a){
   console.log(a);
 }

 restOp(1,2,3,4,5,6,7)



 ///############### Destructuring ####################
//this feature us mainly use for destructuring a new object
//if we want to collect a object property and want to assign in a variable then wee have to use destructuring 

//example for nested object 

const userData= {
    name : "JavaScript",   
    developed: 1995,
    framework:{
        id: 1,
        name: "React",
        used: "FronEnd",
    },
}


const { framework:{used:usedfor} = {} } = userData; //style of object destructuring 
console.log(usedfor);


//array destructuring 

let abcd = [1,2,3,4,[45,453,65,35],335,76];

var [,,,,[,a,b,]] = abcd; 
var [...c] = abcd;
console.log(a,b);
console.log(c);