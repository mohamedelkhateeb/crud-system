let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')
let total = document.getElementById('total')
let clear = document.getElementById('clear')


//get total

function getTotal(){
    if (price.value != ' '){
    let result =    (+price.value + +taxes.value + +ads.value ) - discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "#040"
    }else {
        total.innerHTML = '';
        total.style.backgroundColor = "#red"
    }
}

//get total



//create product

let proArr;

if (localStorage.products !=null) {
    proArr = JSON.parse(localStorage.products )
}
else {
    proArr = []
}


create.onclick = function (){
    let ProObj = {
        
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count :count.value,
        category : category.value
    }
    
    proArr.push(ProObj)

    localStorage.setItem( "products" , JSON.stringify(proArr)   )
    showData()
}

//clear Data

clear.onclick= function (){
    title.value = ''
    price.value = ''
    taxes.value = ''
    ads.value = ''
    discount.value = ''
    total.innerHTML = ''
    count.value = ''
    category.value = ''

}

//show Data

function showData(){
    let table='';
    for (let i=0; i<proArr.length; i++){
        table =
        `
        <td>${[i]}</td>
        <td>${proArr[i].title}</td>
        <td>${proArr[i].price}</td>
        <td>${proArr[i].taxes}</td>
        <td>${proArr[i].ads}</td>
        <td>${proArr[i].discount}</td>
        <td>${proArr[i].category}</td>
        <td>${proArr[i].total}</td>
        <td><button>update</button></td>
        <td><button>delete</button></td>`
    }
    document.getElementById('tbody').innerHTML= table;
}

