let arr = [4,2,7,6,10]; 

let max = arr[0];
let min = arr[0];
for(let i=1; i<arr.length; i++){
    //find max value
    if(arr[i] > max){
        max = arr[i];
    }
    // find min value
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log("Max = ",max)
console.log("Min = ",min)