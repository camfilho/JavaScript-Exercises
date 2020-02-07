Array.prototype.uniq = function() {
    let result = [];
    let checkExistence = {};
    for(let i = 0; i < this.length; i++) {
        if(!checkExistence[this[i]]){
            result.push(this[i]);
            checkExistence[this[i]] = true;
        } 
    }
    return result;
}

Array.prototype.twoSum = function(){
    this.sort((a,b) => a - b);
    let min = {value: this[0],
    k: undefined,
    half: undefined};

    let sum;
    let k = 0;
    let j = this.length - 1
    let half;
    while(k < this.length) {
        j = this.length - 1;
        let item = this[k];
        for(let i = 0; i <= j;) {
            half = Math.floor( (i + j) / 2);
            sum = item + this[half];
            console.log(i,j,half,sum, min.value)
            if (Math.abs(sum) < Math.abs(min.value)) {
                min.value = sum;
                min.k = k;
                min.half = half;
            }
            if (sum < 0){
                i++;
            } else {
                j--;
            }
        }
        k++;
    }
    return [this[min.k], this[min.half]];
}

Array.prototype.transpose = function() {
    result = [];
    for(let i = 0; i < this[0].length; i++) {
        let row = [];
        for(let j = 0; j < this.length; j++) {
            row.push(this[j][i]);
        }
        result.push(row);
    }
    return result;
}