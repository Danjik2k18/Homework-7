var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {
    key: "name",
    age: 18
}]

function myRecurs(argumentArray) {
    var currentValue = argumentArray.shift()
    if (typeof (currentValue) === 'object') {
        var valuesOfObject = Object.values(currentValue)
        myRecurs(valuesOfObject)
        valuesOfObject.shift()
    }
    if (typeof (currentValue) !== 'object') {
        console.log(currentValue)
    }
    if (argumentArray.length) {
        myRecurs(argumentArray)
    }
}
myRecurs(arr)