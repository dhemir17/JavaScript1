let cartForParty = {
    'beers' : 2.99,
    'chips' : 1.99,
    'cola'  : 1.49,
    'tortilla' : 1.29,
    'chocklate' : 0.79

}


function calculateTotalPrice(cartForParty){
    let sum = 0;
    for (const key in cartForParty) {
        sum = sum + cartForParty[key];
    }
return sum;
}


console.log(`The total cost for party is ${calculateTotalPrice(cartForParty)}`);