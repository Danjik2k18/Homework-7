var arr = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15]

function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
}

var newArr = []
for (var i = 0; i <= arr.length; i++) {
    if (isEven(arr[i])) {
        newArr.push(arr[i])
    }
}
console.log(newArr)