let cardNumber = "6666666666666661";

function sixteenDigit(cardNumber){ //string length
    

    if(cardNumber.length == 16 && !isNaN(cardNumber) )
        return true; 
    else {
        console.log(`${cardNumber} not 16 digit or all are not numbers`);
        return false;
    }
}



function sameCheck (cardNumber){ // All digits not same check
    let count = 0;
    for (let i=1;i<cardNumber.length;i++){
        if (cardNumber[0] == cardNumber[i]) {
            count++;
        }
        
    }
    if (count == 15) 
        { 
            console.log(`${cardNumber} Digits are same!`);
            return false;}
        else return true;
}

function finalDigit (cardNumber) { //Last Digit EVEN check
    if (cardNumber[15] % 2 == 0)
    return true;
    else {
        console.log(`${cardNumber} last number is ODD, must be EVEN!`);
        return false;
    }
}


function sumOfDigits (cardNumber) { //Sum if Digits Check
    let sum = 0;
    for (let i=0;i<cardNumber.length;i++){
        sum = sum + parseInt(cardNumber[i]);
    }
    
    if (sum > 15) 
    {return true;}
    else {
        console.log(`Sum of digits is less than 16`);
        return false;
    }
}


function cardCheck (cardNumber) {
if (sixteenDigit(cardNumber) && sameCheck(cardNumber) && finalDigit(cardNumber) && sumOfDigits(cardNumber))
console.log(`${cardNumber} is a valid card number.`);
else
console.log(`${cardNumber} is NOT a valid card number.`);
}


cardCheck(cardNumber);