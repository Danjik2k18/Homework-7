var arr = [-2, 1, 2, 3, 4, 5, 10, 11]

function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true
    }
}

var newArr = []
for (var i = 0; i <= arr.length; i++) {
    if (isNumberInRange(arr[i])) {
        newArr.push(arr[i])
    }
}
console.log(newArr)