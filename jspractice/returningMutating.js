let pets = [
    {name: "Rocky", species: "Cat", age: 2},
    {name: "Gerald", species: "Dog", age: 5},
    {name: "Tucker", species: "Bird", age: 14}
]

console.log(pets.push({name: "Albert", species: "Dog", age: 1}))

console.log(pets)

/*produces an array using the method*/ 
let names = pets.map(nameOnly)

function nameOnly(x) {
    return x.name
}

console.log(names)

let dogs = pets.filter(dogsOnly)

function dogsOnly(x) {
    return x.species=="Dog"
}

function babiesOnly(x) {
    return x.age < 3
}

let nameBabyDogs = pets.filter(dogsOnly).filter(babiesOnly).map(nameOnly)

console.log(nameBabyDogs)