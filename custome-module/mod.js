console.log("This is a module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.lenght;
}

module.exports ={
    avg: average,
    name: "Ashish",
    repo: "gitHub"
}