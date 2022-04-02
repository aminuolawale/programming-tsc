const obj:{key:number} = {key:2}

let obj2: {
    key1: string,
    key2?: string,
    [key:number]: boolean
}

let airplaneSeatingAssignments: {
    [seatNumber:string]: string
} = {
    "s1": "This belongs to me not you"
}


let user : {
    readonly firstName: string
} = {
    "firstName": "john"
}


console.log(user.firstName)
// user.firstName = "newFirstName" -> error