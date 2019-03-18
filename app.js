var arr = [12,43,56];
 var max = arr[0];
 for(var i=0;i<arr.length;i++){
     if(arr[i] > max){
         max=arr[i];
     }
 }
 
 console.log('max : ' + max);

var first = 17;
var second = 84;
var third = 41;

console.log(first > second ? first : second > third ? second : third);
