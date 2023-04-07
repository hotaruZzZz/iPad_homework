const url = "https://raw.githubusercontent.com/hotaruZzZz/iPad_homework/master/ipadair.json";
let xhr = new XMLHttpRequest();
let color, storage, network, ipadArray;
let msg = document.getElementById("msg");
let pic = document.getElementById("pic");

// 取得所有color 的 button
getcolor = document.getElementsByName("color");
getcolor.forEach(element => {
    element.addEventListener('click', requestColor);
    
});

// 取得所有storage 的 button
getstorage = document.getElementsByName("storage");
getstorage.forEach(element => {
    element.addEventListener('click', requestStorage);
});

// 取得所有network 的 button
getnetwork = document.getElementsByName("network");
getnetwork.forEach(element => {
    element.addEventListener('click', requestNetwork);
});

function requestColor(){
    color = this.value;
    xhr.onload = function() {
    ipadArray = this.response;
    let test = ipadArray.filter(item => item.color == color && item.storage == storage && item.network == network);
    // 
    ipadFilter(test);
}
xhr.open("GET", url);
xhr.responseType="json";
xhr.send();
}

function requestStorage(){
    storage = this.value;
    xhr.onload = function() {
    ipadArray = this.response;
    let test = ipadArray.filter(item => item.color == color && item.storage == storage && item.network == network);

    ipadFilter(test);
}
xhr.open("GET", url);
xhr.responseType="json";
xhr.send();
}

function requestNetwork(){
    network = this.value;
    xhr.onload = function() {
    ipadArray = this.response;
    let test = ipadArray.filter(item => item.color == color && item.storage == storage && item.network == network);
    
    ipadFilter(test);
}
xhr.open("GET", url);
xhr.responseType="json";
xhr.send();
}

// result
function ipadFilter(data){
    // 當三個條件都有value
    if(Object.keys(data).length != 0){
        let p = document.createElement("p");                
        data.forEach(value => {
            let div = document.createElement("div");
            div.setAttribute("class","col-12");
            let h3 = document.createElement("h3");
            h3.innerText = "NT$" + value.price;
            let line = document.createElement("div");
            line.setAttribute("class","line");
            let p1 = document.createElement("p");
            p1.innerText =  value.color;
            let p2 = document.createElement("p");
            p2.innerText =  "10.9 吋 iPad Air " + value.network;
            let p3 = document.createElement("p");
            p3.innerText =  value.storage;
            div.append(h3, line,p1, p2, p3);
            msg.innerHTML = div.innerHTML;
            // msg.innerText = "NT$" + value.price +  " 10.9 吋 iPad Air " + value.network + " " + value.storage + " -" + value.color;
            pic.innerHTML = "<img src='" + value.picture + "' style='width:100%;' >";
        });
    } 
}