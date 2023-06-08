Array.prototype.splice = function(){
    let result = []
    let deleted = []
    for (let i = 0; i < this.length; i++) {
        if (i == arguments[0]) {
            if (arguments.length > 2) {
                for (let j = 2; j < arguments.length; j++) {
                    result.push(arguments[j])
                }
                if (arguments[1] == 0) {
                    result.push(this[i])
                }
            } else {
                deleted.push(this[i])
            }
        } else if (i < arguments[0] || i > arguments[0] + arguments[1] - 1) {
            result.push(this[i])
        } else {
            deleted.push(this[i])
        }
    }
    while (this.length > 0) {
        this.pop();
    }
    for (let i = 0; i < result.length; i++) {
        this.push(result[i])
    }
    return deleted
}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 