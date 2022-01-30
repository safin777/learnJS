
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