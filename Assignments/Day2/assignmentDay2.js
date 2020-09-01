//Q1. Program to find particular character in a string //

let sub ="JavaScript"
// fetch r from javaScript
console.log(sub[6]);

//Q2. Program to convert minutes to seconds

let minutes=7;
console.log(minutes + " Minutes into Seconds is " +  minutes*60);

//Q3. Program to search element in a array of strings

var data=[-30,-20,-10,0,90,-80];
var found=data.find(function (ele){
    return ele>0  ;
});
console.log(found);
//Q4. Program to display only elements containing 'a' in the term of array

var array1 =["Apps","Apple","Animals","Fruits","Banana","Cat","Dog"];

for(let i =0; i<=array1.length;i++){
    let a =array1[i];
    console.log(typeof a);
    
    for(let j =0; j<a.length;j++){
       let b = a[j]
         if(b=="A" || b== "a")
         {
        console.log(a);
         }    
   }   
}

//Q5. Print an array in reverse order

swar=['Sa','Re','Ga','Ma','Pa','Dha','Ni','Sa'];
console.log(swar);
let c =swar.length;;
for(let arr=c;arr>=0;arr--){
    console.log(array2[arr]);
}