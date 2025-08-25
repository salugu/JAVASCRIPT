let bullet=document.getElementById("bullet");
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"];
for(let i=0;i<products.length;i++){
    bullet.innerHTML += `<li>${products[i]}</li>`;
}


//Discount Table
let prices = [1000, 2000, 3000, 1500];
for (let i = 0; i < prices.length; i++) {
    bullet.innerHTML += `<li>${products[i]} - $${prices[i]}</li>`;
}