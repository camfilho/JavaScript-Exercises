console.log('Phase 4 - Recursion')

function range(start, end, result = []) {
    result.push(start);
    if(start == end) return result;

    return range(start + 1, end, result);
}

function range2(start, end) {
    if(start == end) return [];

    let result = range(start, end - 1);
    result.push(end);
    return result;
}

console.log(range2(3,5));

function sumRec(arr){
   if (arr.length == 0) return 0;

   return arr[0] + sumRec(arr.slice(1));

}

console.log(sumRec([1,2,3,4]));