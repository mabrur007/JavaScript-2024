// map()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = numbers.map((num) => {
    return (
        num = num + 20
    )
})
// console.log(newNums);

// multiple operations in one array
const newNums2 = numbers.map((num) => (num * 10) + 1)
                        .filter((num) => (num % 2 != 0 && num > 50))
                        
// console.log(newNums2);