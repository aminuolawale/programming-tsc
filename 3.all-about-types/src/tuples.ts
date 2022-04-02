const tuple1: [boolean, string, number] = [true, "hey", 8]

const tuple2: [boolean, number, string[]] =  [true, 33, ["hey"]]

tuple2.push(true)
// so for a tuple you can always append an object of a type specified in its 
// definition. This is why we still need a readonly array

// read-only arrays

const rArray: readonly string[] = ["a", "b"]
// It won't be a good idea to use this often as any update would require 
// copying the whole array first.

// CHECK OUT LEE BYRON'S IMMUTABLE ARRAYS
// null, void, undefined, never

//null -> absence of value
// void -> no return from a function
// undefined -> variable hasn't been assigned a value yet
// never -> function never returns  