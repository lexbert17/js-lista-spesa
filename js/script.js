// dati 

const shoppinglist = ["latte", "uova", "sapone"]
console.log(shoppinglist);

let i = 0;
curShop = "";
let stringList = "";

// logica
while (i < shoppinglist.length) {
    const curShop = shoppinglist[i];
    console.log(curShop);
    stringList += `<li class="lista"> ${curShop} </li>`;
    i++;
}
   
// output

document.querySelector(".lista").innerHTML = stringList
console.log(stringList);