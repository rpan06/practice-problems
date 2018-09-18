function groupArray(arr){
    var objectTypes = {};
    var output = [];
    for(let i = 0; i < arr.length; i++){
      let itemType = typeof arr[i]
      if (!objectTypes[itemType]){
        objectTypes[itemType] = [];
      }
      objectTypes[itemType].push(arr[i])
    }
    for (let key in objectTypes){
      output.push(objectTypes[key])
    }
    return output;
  }

  var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
  groupArray(myArray);

//Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]
