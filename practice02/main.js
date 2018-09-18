function arrayReverse(arr){
    let output = [];
    for (let i = arr.length-1; i>=0; i--){
      output.push(arr[i])
    }
    return output;
  }

var myArray = ['hello', 45, 'Bob', 'what', '23'];
arrayReverse(myArray);
