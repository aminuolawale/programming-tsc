function* createFibonacciGenerator(){
    let a = 0;
    let b = 1;
    while (true){
        yield a;
        [a, b] = [b, a+b]
    }
}

const fibGen = createFibonacciGenerator()
console.log(fibGen.next())
console.log(fibGen.next())
console.log(fibGen.next())
console.log(fibGen.next())
console.log(fibGen.next())
console.log(fibGen.next())
console.log(fibGen.next())
