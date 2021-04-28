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

function stillAlive(catVariable: Cat) {
    if(catVariable.name === "Ember"){
      return 'alive'
    }else{
      return 'dead'
    }
  
}

               
console.log(stillAlive(mycat))
