var courses = [
    {
        name: 'js', 
        coin: 300,
        isFinish: true
    },
    {
        name: 'php',
        coin: 400,
        isFinish: false
    },
    {
        name: 'react',
        coin: 700,
        isFinish: false
    }
]

Array.prototype.everyFake = function(callback){
    var output = true
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(!result){
                output = false
                break
            }
        }
    }
    return output
}

var result = courses.everyFake(function(course, index, lst){
    return course.coin > 200
})
console.log("🚀 ~ file: some.js:21 ~ result ~ result", result)
