var lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.forEachFake = function(forEachFake){
    const len = this.length
    for(var i = 0; i < len; i++){
        forEachFake(this[i], i)
    }
}

lst.forEachFake(function(num, index){
    console.log("🚀 ~ file: callback.js:10 ~ newlst ~ num, index", num, index)
})

Array.prototype.reduceFake = function(reduceFake, result){
    var i = 0
    const len = this.length
    if(arguments.length < 2){
        i = 1
        result = this[0]
    }
    for(; i < len; i++){
        result = reduceFake(result, this[i], i, this)
    }
    return result
}

var totalLst = lst.reduceFake(function(total, num){
    return total + num
})
console.log("🚀 ~ file: callback.js:27 ~ totalLst ~ totalLst", totalLst)

Array.prototype.findFake = function(findFake){
    const len = this.length
    for(var i = 0; i < len; i++){
        const result = findFake(this[i], i, this)
        if(result) return this[i]
    }
}

var findLst = lst.findFake(function(item){
    return item == 3
})
console.log("🚀 ~ file: callback.js:42 ~ findLst ~ findLst", findLst)

Array.prototype.filterFake = function(filterFake){
    const output = [], len = this.length
    for(var i = 0; i < len; i++){
        var result = filterFake(this[i], i, this)
        if(result) output.push(this[i])
    }
    if(output.length < 2) return output[0]
    return output
}

var filterLst = lst.filterFake(function(item){
    return item == 1
})
console.log("🚀 ~ file: callback.js:56 ~ filterLst ~ filterLst", filterLst)