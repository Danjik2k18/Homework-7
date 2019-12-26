function getDivisors(num) {
    var newArr = []
    for(var i = 1; i <= num; i++) {
        if(num % i === 0) {
            newArr.push(i); 
        }
    }
    return console.log(newArr)
}
getDivisors(12)
