// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// console.log(24);
const temps = [17,21,23]
const tempsv2 = [12,5,-5,0,4]
const printForecast = function(arr){
    let str = '';
    for(let i =0;i<arr.length;i++){
         str += `...${arr[i]} C in ${i+1} days `;
    }
    return str;
}
console.log(printForecast(tempsv2));