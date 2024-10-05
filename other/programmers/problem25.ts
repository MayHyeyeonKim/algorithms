type Person = {
    name: String;
    age?: Number;
}

function removeAge(person: Person){
    const result = {...person};
    if(result.age != null){
        delete result.age;
    }
    return result
}
console.log(removeAge({name:'김토스', age:20}).age);