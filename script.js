let emoji = document.querySelectorAll(".emoji");
let heading = document.querySelector(".heading");
let header = document.querySelector(".header");
let emojiSection = document.querySelector(".emoji-section");
let giphy = document.querySelector(".giphy");
let btn = document.querySelector(".btn");
let info = document.querySelector(".info");

for(var i=0; i<emoji.length; i++){
  emoji[i].addEventListener("click",function(){
    heading.innerHTML = "Thanks for giving your time!"
    giphy.style.visibility = "visible"
    btn.style.visibility = "visible"
    emojiSection.style.fontSize = "20px"
    emojiSection.style.padding = "0px"
      emojiSection.innerHTML = ""
info.style.visibility = "visible"
header.style.padding = "30px"
heading.style.paddingBottom = "5px"
});
};

btn.addEventListener("click", function(){
  location.href = "index.html";
});
