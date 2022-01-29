//just write a keyword "async" before a function
//if you type async then you have to write await
//its return the function as a promise 
//await only can write inside async function

async function course(){
   await enroll(); //step1 //when we make await it will execute after getting resolve.
   await progress();//step2
   const msg = await getCertificate();//step 3
   console.log(msg);
}