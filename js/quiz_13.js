let allCarts=[];
let dropdown;
let addValue=false;
fetchData();
showDatiels()

async  function fetchData() {
    let myFetch=await fetch('https://dummyjson.com/carts');
    if(myFetch.ok){
        let data=await myFetch.json();
         console.log("Data fetched:", data);
        allCarts= data['carts'];
        console.log("Carts:",allCarts);
        dropdown = document.getElementById('dropdown');
             allCarts.forEach(element => {
             let option= document.createElement('option');
             option.value=element.id;
             option.textContent= `Cart ${element.id}`;
            dropdown.appendChild(option);
            console.log('fetch work');
             });
    }
    else{
        console.log('error fetch data')
    }
    
}


function addSelected() {

 showDatiels();
    console.log('done add');
 let selected=dropdown.value; 
let selectedCart= allCarts.find(c=>c.id==selected);
cartDetails(selectedCart);
productTable(selectedCart);

}


function cartDetails(selectedCart) {
    console.log('done cart');
    let userID=document.getElementById('cartUser');
    let totalProducts=document.getElementById('totalProducts');
    let totalQuantity=document.getElementById('totalQuantity');
    let discountedTotal=document.getElementById('discountedTotal');
    let total=document.getElementById('total');

    userID.textContent=selectedCart.userId;
    totalProducts.textContent=selectedCart.totalProducts;
    totalQuantity.textContent=selectedCart.totalQuantity;
    discountedTotal.innerHTML= `${selectedCart.discountedTotal} &nbsp $`;
    total.innerHTML=`${selectedCart.total} &nbsp $`;





}

function productTable(selectedCart){
    console.log('done product');
 let tableBody=document.getElementById('productsDetails'); 
 tableBody.innerHTML=``;
    selectedCart.products.forEach(p=>{
let row=document.createElement('tr');
let img =document.createElement('td');
let title =document.createElement('td');
let quantity =document.createElement('td');
let price =document.createElement('td');
let discount =document.createElement('td');
let total =document.createElement('td');
let discountedTotal =document.createElement('td');


img.innerHTML=`<img src="${p.thumbnail}" width="100">`;
title.textContent=p.title;
quantity.textContent=p.quantity;
price.innerHTML=`${p.price}&nbsp $`;
discount.innerHTML=`${p.discountPercentage}&nbsp %`;
total.innerHTML=`${p.total}&nbsp $`;
discountedTotal.innerHTML=`${p.discountedTotal}&nbsp $`;
row.append(img,title,quantity,price,discount,total,discountedTotal);
tableBody.appendChild(row);
});
}

function showDatiels(){

let show = document.querySelector('section');
show.classList.remove('hideAll','showAll')
if(addValue==false)
{
    show.classList.add('hideAll');
    addValue=true;
}
else{
    show.classList.add('showAll');
}
}


