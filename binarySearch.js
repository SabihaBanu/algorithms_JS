function binarySearch(list, value){
    
    //initial values for start, end & middle

    let start = 0;
    let end = list.length-1;
    let middle = Math.floor((start+end)/2);

    //while the middle is not what we are looking for & the list does not have a single item

    while(list[middle] !== value && start < end){
        if(value < list[middle]){
            end = middle -1;
        } else{
            start = middle + 1;
        }

        //recalculate middle on every iteration

        middle = Math.floor((start + end)/2)
    }

    //if the current middle item is what we're looking for return it's ndex, otherwise(else) return -1

    return (list[middle] !== value) ? -1 : middle;
}
const list = [2, 6, 9, 23, 42, 88, 100];
console.log(binarySearch(list, 100));