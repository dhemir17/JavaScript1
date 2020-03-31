let shopList = ["bananas", "milk"];
let a = shopList.length;


let groceryItem = ["domatoes", "patatoes", "cucumber"];
let item1 = groceryItem[Math.floor(Math.random() * 3)];
let item2 = groceryItem[Math.floor(Math.random() * 3)];
let item3 = groceryItem[Math.floor(Math.random() * 3)];

let item;
function addToShoppingCart (item){
    shopList.push(item);
    if (shopList.length > 3) {
        let newArr = shopList.slice(1,4);
        shopList = newArr;
    }
    console.log(shopList);
}

addToShoppingCart(item1);
addToShoppingCart(item2);
addToShoppingCart(item3);

