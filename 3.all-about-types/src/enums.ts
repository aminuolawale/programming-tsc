// with enums we can specify the possible values of a type



enum Language {
    English,
    Russian, 
    Yoruba
}
const enum Language1 {
    English,
    Russian,
    Yoruba
}

const person: {name:string, language:Language} = {
    name: "Mohammed", language: Language.Yoruba
}

console.log(person)


// why  const enums?

Language[0]
// Language1[0]  -> const enums can only be lookedup with strings




