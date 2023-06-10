function iteratableProtocol() {
    const myObject = {
        arr: [], 
        getRandomInt: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }, 
        generateArr: function(){
            for (let i = 0; i < 10; i++) {
                this.arr.push(this.getRandomInt(0, 100))
            }
        },
        [Symbol.iterator]: function(){
            return {
                next: function(){
                    if(this.count >= this.props.length){
                        return { done: true}
                    }
                    for (let i = this.count; i < this.props.length; i++) {
                        if (this.props[i] % 2 === 0) {
                            this.count = i + 1
                            return {done: false, value: this.props[i]}
                        }
                    }   
                    return { done: true}
                },
                props: this.arr, 
                count: 0
            }
        }
    }
    myObject.generateArr()
    console.log(myObject.arr)
        
    for (let x of myObject) {
        console.log(x)
    }
}

iteratableProtocol()