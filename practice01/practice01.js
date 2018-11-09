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
biggerWords('whales', myArray)
