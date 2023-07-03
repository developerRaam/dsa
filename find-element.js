let arr = [4,2,7,6,10]; 

let data = 10;

let index = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i] == data){
        index = arr[i];
        break;
    }
}
console.log(index);