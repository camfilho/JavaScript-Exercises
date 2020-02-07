Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach((item) => {
        result.push(callback(item));
    });
    return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let newAr = this;
    if (initialValue == undefined) {
        initialValue = newAr[0];
        newAr = newAr.slice(1);
    }
    let acc = initialValue;
    newAr.myEach(e => {
        acc = callback(acc, e);
    });

    return acc;
}
