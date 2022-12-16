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
        coint: 700,
        isFinish: false
    }
]

Array.prototype.someFake = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
                return true;;
            }
        }
    }
    return false
}

var result = courses.someFake(function(courses, index, lst){
    return courses.isFinish
})
console.log("🚀 ~ file: some.js:21 ~ result ~ result", result)