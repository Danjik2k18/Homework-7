function getDigitsSum(digit) {
    var str = String(digit)
    var sum = 0
    for(var i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return alert(sum)
}
getDigitsSum(1222)