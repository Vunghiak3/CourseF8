Array.prototype.forEachFake = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            callback(this[i], i, this)
        }
    }
}

lst = ['js', 'php', 'ruby']

lst.forEachFake(function(item, idex, lst){
    console.log("🚀 ~ file: forEach.js:12 ~ item, idex, lst", item, idex, lst)
});