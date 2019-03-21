//var arr = [5,2,7,9,6,1,4,5,0];
var arr = [5,2,6,15,7,9,3,8];


//JS implementation of quickSort
function qsort(arr){
   if(arr.length <= 1){
       return arr;
   }

   const[pivot, ...rest] = arr;
   const left = [], right = [];
   rest.forEach(el => el < pivot ? left.push(el) : right.push(el));

   return qsort(left).concat(pivot).concat(qsort(right));
}

console.log(qsort(arr));

