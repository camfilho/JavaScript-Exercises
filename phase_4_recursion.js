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

function exponent(base, exp){
    if (exp == 0) return 1;

    return base*exponent(base,  exp - 1);
}

console.log(` 2 to the power of 3 = ${exponent(2,3)}`);
function sleep() {
    for(let i = 0; i < 1000*1000*1000; i++ ){

    }
}
function fibonacci(n){
    if (n < 2) return [1, 1];

    let cache = fibonacci(n - 1);
    cache.push(cache.slice(-2).reduce((acc, e) => acc + e));

    return cache;
}