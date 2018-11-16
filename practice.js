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
var myString = "Hello my name is Stu"
function translate(str){
  return str.toLowerCase().replace(/(\w)(\w*)/g, '$2$1ay')
}
translate(myString);
//Output - `"ellohay ymay ameya siay tusay"`


//08
function characterConvert(str){
    let output = "";
    str = str.split("")
    str.map(item=> {output += item.charCodeAt(0)})
    return output
  }
  characterConvert('the cat in the hat');
  // - "11610410132999711632105110321161041013210497116";


  //09
  var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
  function fittingWords(str, arr){
    let flag = true;
    let output = [];
    let checkArr = str.split("")
    checkArr.map(letter => {
      arr = arr.filter(item=>{
        item.includes(letter)
      })
    })
    return arr
  }
  fittingWords('cat', myArray);


  //10
  Given the following function call:
- permutations('abc');

And the resulting output:
- ["abc", "acb", "bac", "bca", "cab", "cba"];

Create a function definition that achieves the output with the given input.
