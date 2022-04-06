var arrBrand = ["LG", "HTC", "Nokia", "iPhone", "Samsung"];

// Popup | Modul
function mehsulElaveEtme(ad, qiymet, ram, img) {
    this.model = ad;
    this.price = qiymet;
    this.ram = ram;
    this.img = img
}

var arrModelNames = ["Apple iPhone 12 Pro Max", "Apple iPhone 12", "Apple iPhone 13 Pro Max", "Apple iPhone 11 Pro Max"];
var arrPrice = [2450, 3000, 2500, 2150];
var arrModelRAM = ["4GB", "6GB", "6GB", "2GB"];
var arrImg = ["iPhone-0.jpg", "iPhone-1.jpg", "iPhone-2.jpg", "iPhone-3.jpg"];
var arrItems = [];

var arrModelNames1 = ["Samsung Galaxy A30s", "Samsung Galaxy A52", "Samsung Galaxy A12", "Samsung Galaxy A32"];
var arrPrice1 = [450, 599, 340, 550];
var arrModelRAM1 = ["4GB", "6GB", "6GB", "2GB"];
var arrImg1 = ["Samsung-0.jpg", "Samsung-1.jpg", "Samsung-2.jpg", "Samsung-3.jpg"];
var arrItems1 = [];

var arrModelNames2 = ["Nokia S5", "Nokia P7", "Nokia S10", "Nokia X10s"];
var arrPrice2 = [250, 400, 300, 660];
var arrModelRAM2 = ["4GB", "6GB", "6GB", "2GB"];
var arrImg2 = ["Nokia-0.jpg", "Nokia-1.jpg", "Nokia-2.jpg", "Nokia-3.jpg"];
var arrItems2 = [];

var arrModelNames3 = ["LG K10", "LG S10", "LG F10", "LG X10s"];
var arrPrice3 = [250, 400, 300, 660];
var arrModelRAM3 = ["4GB", "6GB", "6GB", "2GB"];
var arrImg3 = ["LG-0.jpg", "LG-1.jpg", "LG-2.jpg", "LG-3.jpg"];
var arrItems3 = [];

var arrModelNames4 = ["HTC S5", "HTC P7", "HTC S10", "HTC X10s"];
var arrPrice4 = [250, 400, 300, 660];
var arrModelRAM4 = ["4GB", "6GB", "6GB", "2GB"];
var arrImg4 = ["HTC-0.jpg", "HTC-1.jpg", "HTC-2.jpg", "HTC-3.jpg"];
var arrItems4 = [];

for(var i=0; i<arrModelNames.length; i++){
    arrItems.push(new mehsulElaveEtme(arrModelNames[i],arrPrice[i],arrModelRAM[i], arrImg[i]));
    arrItems1.push(new mehsulElaveEtme(arrModelNames1[i],arrPrice1[i],arrModelRAM1[i],arrImg1[i]));
    arrItems2.push(new mehsulElaveEtme(arrModelNames2[i],arrPrice2[i],arrModelRAM2[i],arrImg2[i]));
    arrItems3.push(new mehsulElaveEtme(arrModelNames3[i],arrPrice3[i],arrModelRAM3[i],arrImg3[i]));
    arrItems4.push(new mehsulElaveEtme(arrModelNames4[i],arrPrice4[i],arrModelRAM4[i],arrImg4[i]));
}

console.log(arrItems);
console.log(arrItems1);
console.log(arrItems2);
console.log(arrItems3);
console.log(arrItems4);


// var item = document.querySelectorAll(".category .item");
var input = document.querySelector(".container #search");
var stock = document.querySelector(".products");
var lu = document.querySelector(".container .lorem");
// var names = ["Samsung","iPhone","Nokia","HTC","LG"];

for (var i = 0; i < 4; i++) {
    var col3 = document.createElement("div");
    col3.classList.add("col-3");
    var stockItems = document.createElement("div");
    stockItems.classList.add("product-item");
    var img = document.createElement("img");
    img.src = `img/iPhone-${i}.jpg`;
    img.classList.add("image");
    var p = document.createElement("p");
    p.innerText = arrItems[i].model;
    var span = document.createElement("span");
    span.innerText = arrItems[i].price + "AZN";
    stockItems.appendChild(img);
    stockItems.appendChild(p);
    stockItems.appendChild(span);
    col3.appendChild(stockItems);
    stock.appendChild(col3);
}
// li-lerin yaradilmasi
for (var i = 0; i < arrBrand.length; i++) {
    var a = document.createElement("li");
    a.classList.add("item");
    a.setAttribute("index", i);
    a.innerText = arrBrand[i];
    lu.appendChild(a);
}
input.addEventListener("keyup", function (e){
   
    if (e.keyCode > 64 && e.keyCode < 91) {
        var li = document.querySelectorAll(".container .lorem .item");

        for (var i = 0; i < li.length; i++) {
            li[i].remove();

        }
        for (var i = 0; i < arrBrand.length; i++) {
            var g = input.value;
            // var h = arrBrand[i];
            if (arrBrand[i].toLowerCase().includes(g.toLowerCase())) {
                console.log("sda");
                var f = document.createElement("li");
                f.classList.add("item");
                f.innerText = arrBrand[i];
                lu.appendChild(f);
            }
        }
        if (lu.children.length == 0) {
            var j = document.createElement("li");
            j.classList.add("item");
            j.innerText = "Netice tapilmadi!";
            lu.appendChild(j);
        }

    } else if (input.value == "") {
        var li = document.querySelectorAll(".container .lorem .item");
        for (var i = 0; i < li.length; i++) {
            li[i].remove();
        }
        for (var i = 0; i < arrBrand.length; i++) {
            var a = document.createElement("li");
            a.classList.add("item");
            a.innerText = arrBrand[i];
            lu.appendChild(a);
        }
    }

});

// sekillerin gosterilmesi
var stock_div = document.querySelectorAll(".products .col-3");
var item = document.querySelectorAll(".lorem .item");
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {

        for (var i = 0; i < stock_div.length; i++) {
            // stock.children[0].remove();
            $(".products").empty();
        }
        var content = String(this.innerText);
        // content = content.toLowerCase();
        // console.log(content);
        for (var i = 0; i < 4; i++) {
            var col3 = document.createElement("div");
            col3.classList.add("col-3");
            var stockItems = document.createElement("div");
            stockItems.classList.add("product-items");
            var img = document.createElement("img");
            // li-nin metni ile sekli secmek
            img.src = `img/${content}-${i}.jpg`;
            img.classList.add("image");
            var p = document.createElement("p");
            p.innerText = "Phone";
            // appendChild
            stockItems.appendChild(img);
            stockItems.appendChild(p);
            col3.appendChild(stockItems);
            stock.appendChild(col3);
           
        }
    })
}

$(".products .col-3").click(function(){
    $(".row10").fadeIn().css("display", "flex");
    // console.log($(this).index());
    $(".popup img").attr("src", `img/${arrItems[$(this).index()-1].img}`);
    $(".popup p").eq(0).html(`Model: <span>${arrItems[$(this).index()-1].model}</span>`);
    $(".popup p").eq(1).html(`Qiymeti: <span>${arrItems[$(this).index()-1].price}AZN</span>`);
    $(".popup p").eq(3).html(`Qiymeti: <span>${arrItems[$(this).index()-1].ram}</span>`);

});

$(".fa-xmark").click(function(){
    $(".row10").fadeOut();
});



