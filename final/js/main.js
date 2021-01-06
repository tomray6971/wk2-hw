let big = document.querySelector(".big")
let big_img = document.querySelector(".big .img img")

big.onclick = function(){
    big_img.src=""
    big.style.display = "none"
}

let data_arry=["img/home_cat01.png","img/home_cat04.png","img/home_cat05.png","img/home_cat06.png"]

for(let i=1;i<=4;i++){
    document .querySelector(".card"+i+" img").src = data_arry[i-1]
    document.querySelector(".card"+i).onclick = function(){
       let my_img_src =document.querySelector(".card"+i+" img").src
       big_img.src= my_img_src
       big.style.display = "block"
       }
   }