let iterator1  = {
    *[Symbol.iterator](){
        for (let n= 1; n<=10; n++){
            yield n;
        }
    }
}


console.log(iterator1[Symbol.iterator]())

for(let a of iterator1){
    console.log(a)
}