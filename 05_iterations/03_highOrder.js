// video 29
// console.log("High order js")

const arr = [1, 2, 3, 4, 5, 6]
for (const item of arr) {
    // console.log(item);
}

const myObj = {
    name: "Naim",
    age: 32,
    place: "dhaka"
}

for (const key in myObj) {
    // console.log();
}

const frndName = "abul kalam"
for (const char of frndName) {
    // console.log(char);
}

// Map() 
const map = new Map();
map.set('BD', 'Bangladesh')
map.set('IN', 'India')
map.set('CH', 'China')
map.set('JPN', 'Japan')

for (const [key, value] of map) {
    // console.log(key, ":", value);
}

// applying for-in in object
for (const key in myObj) {
    // console.log(`key is: ${key}, value is: ${myObj[key]}`);
}

// applying for-in in array
const courses = ['java', 'python', 'ruby', 'swift']

for (const key in courses) {
    // console.log(courses[key]);
}

// applying for-in in Map()
for (const key in map) {
    // console.log(map[key]);
}
// above operation is not possible


// applying for-each in array

// option-1 [using normal function]
// courses.forEach(function (item) {
//     console.log(item);
// })

// option-2 [using arrow function]
// courses.forEach((item) => {
//     console.log(item);
// })

// option-3 [calling fn inside for-each]
// function myCourse(item) {
//     console.log(item);
// }
// courses.forEach(myCourse);

// option-4 [what we get inside for-each]
// courses.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// new array of objects
const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    },
]
myCoding.forEach((item,idx,arr) => {
    // console.log(item['languageName'].length);
})