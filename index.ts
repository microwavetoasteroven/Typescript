export type Graffiti = {
    name: string
    numberOfTime?: number
}

export type Car = {
    brand: string
    colour: string
    graffitiWords?: Graffiti[]
}
export type Person = {
  name: string
  favCar: Car
  age: number
}

const people: Person[] = 
[{
  name: "danny",
  favCar: {
    brand: "tot",
    colour: "red",
    graffitiWords: [
        {name: "tosser"}, 
        {name: "dickend", numberOfTime: 3}]
  },
  age: 33
},
{name: "zac",
  favCar: {
    brand: "tot",
    colour: "blue"
  },
  age: 33
}]

function capitalizeFirstLetter(x: string) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}


people.forEach(person => console.log(`${capitalizeFirstLetter(person.name)} is ${person.age} years old. Their favourite colour of car is ${person.favCar.colour}`));

people.forEach(person => person.favCar.graffitiWords?.forEach(graffiti => console.log(graffiti.numberOfTime)))


export type Cat = {
    name: string
    kind?: string
    quantity?: number
    colour?: string
    alive: boolean
    age: number?
}

const mycat: Cat = {
    name: "Ember",
    alive: true,
    quantity: 1,
    age: 4,
}

function stillAlive(isalive: Cat) {
    if(isalive){
      return 'alive'
    }
}

console.log(`My cat ${capitalizeFirstLetter(mycat.name)} is still ${stillAlive(mycat)} and his age is ${mycat.age}`);
