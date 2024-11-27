//bu js dosyası sabit olarak değişiklik yapar.  

const title=document.querySelector('title');

title.innerHTML="mertcan-incioğulları-YMYP5"

const container =document.querySelector(".container");
container.style.width='80%';
container.style.backgroundColor='#FEC689';
container.style.padding='10px';
container.style.border='5px solid black';
container.style.margin='0 auto';


const box = document.querySelectorAll(".box");
box.forEach(element => {
    element.style.height="20vh";
    element.style.backgroundColor='#FF5733';
    element.style.margin='10px';
    element.style.padding="10px";
    element.style.border='3px solid brown';
    element.style.fontWeight='bolder';
    element.style.display = 'flex';
    element.style.justifyContent = 'center'; // Horizontal centering
    element.style.alignItems = 'center'; 
    element.style.fontSize='20px';
    element.style.color='white';

});
const divHeader = document.querySelector("#header");

divHeader.innerHTML="deneme deneme deneme deneme deneme deneme deneme deneme deneme denemedeneme deneme deneme deneme denemedeneme deneme deneme deneme deneme"



const pagetitle =document.querySelector("#page_title");
pagetitle.innerHTML="deneme deneme deneme deneme deneme deneme denemeneme deneme deneme deneme deneme"

const btn =document.querySelector('.button')
btn.style.border='3px solid black';
btn.style.fontWeight='bolder';
btn.style.fontSize='20px';
btn.style.marginBottom="30px";


//getelementbyid yapısı
document.getElementById('content').textContent = ' deneme deneme deneme deneme deneme deneme deneme deneme denemedeneme deneme deneme deneme denemedenem';


const footer =document.querySelector("#footer")
footer.innerHTML="deneme deneme deneme deneme deneme deneme denemeneme deneme deneme deneme deneme"
const elementNames=[];

document.querySelector(".button").addEventListener("click", function() {
    elementNames.length=0;
    for(var i=0;i<box.length;i++)
    {
elementNames.push(box[i].id);
    }
    


    const elementName = prompt("Hangi elementin içeriğini ve stilini değiştirmek istersiniz?"+elementNames);

    // Seçilen elementi al
    const element = document.getElementById(elementName);

    // Eğer geçerli bir element seçilmediyse, uyarı ver ve işlemi sonlandır
    if (!element) {
        alert("Geçerli bir element adı girin! (header, page_title, content, footer)");
        return;
    }


    // Kullanıcıdan yeni genişlik, renk ve içerik değerlerini al
    const newWidth = prompt("Yeni genişlik (px cinsinden) girin:");
    const newColor = prompt("Yeni renk (örnek: #FF5733 ya da red):");
    const newContent = prompt("Yeni içerik girin:");

    // Alınan verileri elemente uygula
    element.style.width = newWidth + "px";  // Genişlik
    element.style.backgroundColor = newColor; // Arka plan rengi
    element.innerHTML = newContent; // İçerik

});
