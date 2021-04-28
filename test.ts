export type Cat = {
    name: string
    kind?: string
    quantity?: number
    colour?: string
    alive: boolean
}

const mycat: Cat = {
    name: "Ember",
    alive: true,
    quantity: 1,
}

function makeEmberDed(catVariable: Cat) {
    if(catVariable.name === "Ember"){
      catVariable.alive = false
    }
  
}
               
console.log(`My cat ${mycat.name} is alive? ${mycat.alive}`)
makeEmberDed(mycat)
console.log(`My cat ${mycat.name} is alive? ${mycat.alive}`)
