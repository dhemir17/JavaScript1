let name = "Burak"; //verifying name variable and give value
function giveCompliment (name) {
    let myArray = ["beatiful", "handsome", "sweet", "cute", "lovely", "sweet hart", "sweety", "honey", "beatiful eyed", "love"]; //we define our array
    let num = Math.floor(Math.random() * 10); //we random and round a number 0 to 9
    let comp = myArray[num]; // 
    console.log(`You are ${comp}, ${name}`); //We log to console the text

}

giveCompliment(name); //call the function