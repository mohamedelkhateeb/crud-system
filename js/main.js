//Get elements

let title =document.getElementById('title')
let price =document.getElementById('price')
let taxes =document.getElementById('taxes')
let ads =document.getElementById('ads')
let discount =document.getElementById('discount')
let total =document.getElementById('total')
let category =document.getElementById('category')
let count =document.getElementById('count')
let create =document.getElementById('create')
let clearPro =document.getElementById('clear')

let mood = 'upadate'
let aii;


//How to get the total price.

function getTotal(){
    if(price.value != '') {
        let resulte = (+price.value + +taxes.value + +ads.value ) - +discount.value
        total.innerHTML = `Resulte : ${resulte}`
    }
    else{
        total.innerHTML = 'Resulte : '
    }
}



//How to Create the product and store it.
let dataArray;

// if (localStorage.products !=null) {
//     dataArray = JSON.parse(localStorage.products )
// }
// else {
//     dataArray = []
// }

dataArray = []

create.onclick = function() {
    let proObj = {
        title: title.value,
        price: price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        category:category.value,
        count:count.value
    }


    if(mood === 'create') {
        if(proObj.count > 1) {
            for(let i = 0; i<proObj.count; i++) {
                dataArray.push(proObj)
            }
        }
        else{
            dataArray.push(proObj)
        }
    }else{
        dataArray[aii] = proObj;
        mood = 'create'
        create.innerHTML = 'Create'
    }


    // localStorage.setItem('products' , JSON.stringify(dataArray))
    showData() 
}


//how to clear the data from inputs


clearPro.onclick = function () {
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    category.value = ''
    count.value = ''
    total.innerHTML = 'Resulte : '
    
}


//how to show the products


function showData() {
    let table = '';
    for (let i = 0; i<dataArray.length ; i++ ) {
        table += 
    `<tr>
        <td>${i}</td>
        <td>${dataArray[i].title}</td>
        <td>${dataArray[i].price}</td>
        <td>${dataArray[i].taxes}</td>
        <td>${dataArray[i].ads}</td>
        <td>${dataArray[i].discount}</td>
        <td>${dataArray[i].category}</td>
        <td><button onclick = "updateItem(${i})">update</button></td>
        <td><button onclick = "deleteItem(${i})">delete</button></td>
        </tr>`
    }  

    document.getElementById('tbody').innerHTML = table;
}




//How to delete item

function deleteItem(i){
    dataArray.splice(i , 1)
    localStorage.deleteItem = JSON.stringify(dataArray)
    showData()
}



function updateItem(i){
    title.value = dataArray[i].title
    price.value = dataArray[i].price
    discount.value = dataArray[i].discount
    ads.value = dataArray[i].ads
    taxes.value = dataArray[i].taxes
    category.value = dataArray[i].category
    getTotal()
    mood = 'update'
    create.innerHTML = 'Update'
    aii = i;
}
