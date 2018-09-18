function biggerWords(str, arr){
    return arr.filter(word=>word.length>str.length)
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
biggerWords('whales', myArray);

// Output ['reptile', 'mammoth', 'turtles']
