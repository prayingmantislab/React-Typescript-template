let myObject = {
  name: "Asi",
  age: 47,
  kids:[
 {
      name:'Itamar',
      age:15
 },
 {
      name:'Michael',
      age:12
    }
  ]
}

function hasProp (obj,prop){
  return myObject.hasOwnProperty('age')
}

// console.log(hasProp(myObject,47))
// console.log(myObject.kids.itamar.age)
// console.log(myObject.kids)
// console.log(Object.keys(myObject))
// console.log(Object.values(myObject))

const asi = {
    first:'et',
    second:'micha'
}

const liran = {
  first:'gal',
  second:'ben',
  third:'raz'
}

const family = { ...asi,...liran}
console.log(family)