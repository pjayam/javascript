var list = ["pavan","kumar","jayam","arsheni"];
console.log(list);

var array = [1,2,3,4];

var array2 = [1,2,3,4];

var user = {
    name:"",
    age:25,
    spells:["John","bob"],
    isMarried:true,
    shout:function(){
        console.log("function part of shout of user...")
    }
}

var emptyObj = {};
var nullObj = null;

console.log(user);
console.log(user.shout())



list.forEach(function(i){
    console.log(i)
})

