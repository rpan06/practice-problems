//01

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(str, arr){
    const output = [];
    arr.map(item=>{
        if(item.length>str.length){
            output.push(item)
        }
    })
    console.log(output)
}
// biggerWords('whales', myArray)


//02
var myArray = ['hello', 45, 'Bob', 'what', '23'];

function arrayReverse(arr){
    let output = [];
    for (let i = arr.length-1; i>=0; i--){
        output.push(arr[i])
    }
    console.log(output)
}
// arrayReverse(myArray);
//Output - `['23', 'what', 'Bob', 45, 'hello']`


//03
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
function groupArray(arr){
    let output = [];
    let objTable = {
        string: [],
        number: [],
        boolean: []
    }
    arr.map(item=>{objTable[typeof item].push(item)})
    console.log(Object.values(objTable))
}
groupArray(myArray);
// Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`


//04
