sortit = [6, 20, 17, 0, 32, -7, 45, 4];

//Calling quicksort to execute here, see implementation further down
quicksort(sortit);

function partition(arr, low, high) {
    var pivotIdx  = low ;
    var pivotval = arr[pivotIdx];   
    var i = low;
    var j = high;
    
    while ( i <= j ) {
        while (arr[i] < pivotval) {
         i++;   
        }
        while (arr[j] > pivotval ) {
         j--;   
        }
		if (i <= j ) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			 i++; j--;
		}
    }
	if (low < j) {
		partition(arr, low, j);	
	}
	if (i < high) {
		partition(arr, i , high)	
	}

}

function quicksort(arr) {
   var sorteda = "";
   partition(arr, 0, arr.length - 1);
   for(var i=0; i<arr.length; i++) {
     sorteda += arr[i] + ', ';
   }
   console.log(sorteda);
} 
