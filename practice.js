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
// groupArray(myArray);
// Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`


//04
var myArray = ['mouse', 'cat', 'dog', 'human'];
function sort(arr){
    let flag = true;
    while(flag){
        flag = false;
        for(var i = 0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                flag = true;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    console.log(arr)
}
// sort(myArray);
// Output - `['cat', 'dog', 'human', 'mouse']


//05
function fizzBuzz(){
    for(let i = 1; i < 101; i++){
        if(i%15 === 0){
            console.log('FizzBuzz')
        } else if(i%3 === 0){
            console.log('Fizz')
        } else if(i%5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}
// fizzBuzz()


//06
function fibSequence(num){
    if (num === 1){
        return '0';
    } else if (num === 2){
      return '0 1'
    }
    let counter = 3;
    let output = [0, 1];
    while (counter <= num){
      const newNum = output[output.length-1] + output[output.length-2]
      output.push(newNum)
      counter++
    }
    return output.join(" ")
}
fibSequence(12);
// Output - `0 1 1 2 3 5 8 13 21 34 55 89`


//07
