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
    member1:'et',
    member2:'micha'
}

const liran = {
  member3:'gal',
  member4:'ben',
  member5:'raz'
}
//write a function that returns the combined objects into one
//[x] name the function
//[ ] input/output
//[x] choose the method




const mergeObjects = (object1,object2)=>{
 return Object.assign({},object1,object2)
}

const result =mergeObjects(asi,liran)
console.log(result)
