const course1 = {name: 'Programming Hero'}
const course2 = {name: "Next Level Web"}

// const obj = {
//     nextLevel: {courseId : 'Level2'},
//     [true]: { courseId: 'Level1'}
// };

const obj = {};


obj[course1] = {courseId: "Level2"}
obj[course2] = {courseId: "Level1"}


console.log(obj["[object Object]"])

// console.log(obj.nextLevel)  
// dot notation

// console.log(obj[true]) 
// square bracket notation


// const course1 = {name: 'Programming Hero'}
// const course2 = {name: "Next Level Web"}

const map = new Map();

map.set(course1, {courseId: "level1000"})
map.set(course2, {courseId: "level2"})

// console.log(map)

// console.log(map.get(course1))
// console.log(map.get(course2))

// // map.clear()
// console.log(map.size)
// map.delete(course1)
// console.log(map.has(course1))

// console.log(map)

// ====> map has only one method and its forEach
// map.forEach((value, key) => console.log("key:" , key, "Value", value))

// map.forEach((value, key) => (key.name = "Shohoj shorol " + key.name))

// console.log(map.keys())  // for key output

// console.log([...map.keys()])  // array of object

// console.log([...map.values()])  // array of object

// console.log(map.entries())