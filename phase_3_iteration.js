let test = [3,1,2,5, -1];
Array.prototype.bubbleSort = function() {
    let newAr = [...this];
    let swap = true;
    while(swap) {
        swap = false;
        newAr.forEach((value, index) => {
            if(value > newAr[index + 1]) {
                [newAr[index], newAr[index + 1]] = [newAr[index + 1], newAr[index]]
                swap = true;
            }
        });
    }
    return newAr;
}
console.log(test.bubbleSort());

// String#substrings
String.prototype.substrings = function () {
    let substrings = [];
  
    for (let start = 0; start < this.length; start++) {
      for (let end = start + 1; end <= this.length; end++) {
        substrings.push(this.slice(start, end));
      }
    }
  
    return substrings;
  };
  
  console.log("abc".substrings());