'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max;
    // write your code here
    for(var i=0;i<=arr.length;i++){
     let num =arr[i+1];
     if(arr[i]-num>0){
         max=arr[i];
     }
     let count=arr.length-1;
     let las=arr[count];
     if(las-max>0){
         max=las;
     }
    }
    return max;
}
  




// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the (tarray here could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------
const sumNums = (arr) => {
    let sum =0;
    for (var i = 0; i <= arr.length - 1; i++) {
        var num2 = arr[i]
       var num1 = arr[i] + arr[i]
       if(num1== num2*2) {
            sum = sum +num2
       }
    }
    // write your code here
    return sum;
}


        

        
    

    


        
    
    


// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr) => {



    var output = [];
    for (var i = arr.length - 1; i> -1; i--){
        output.push(arr[i]);
    }

    return output;
 
}

module.exports = { findMax, sumNums, reverseArray };
  

 

