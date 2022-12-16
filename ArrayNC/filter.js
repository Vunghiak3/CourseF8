var courses = [
    {
        name: 'js',
        coin: 290
    },
    {
        name: 'php',
        coin: 300
    },
    {
        name: 'react',
        coint: 900
    }
]

Array.prototype.filterFake = function(callback){
    var output = []
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if(result) output.push(this[index])
        }
    }
    return output
}

var filterCourses = courses.filterFake(function(course, index, lst){
    return course.coin < 900
})
console.log("🚀 ~ file: filter.js:19 ~ filterCourses ~ filterCourses", filterCourses)

