// ==UserScript==
// @name        Thumbnail Grabber
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @version     2.0
// @author      Kouta e D-zero
// @description 17/10/2025 07:30:00
// ==/UserScript==

const textStyle = `
.butaostyle {
  font-style: oblique;
  font-weight: 600;
  background-color:rgb(70,70,70);
  opacity:0.6;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
.butaostyle:hover {
  background-color: grey;
}
.thumbbutao {
  font-style: oblique;
  font-weight: 600;
  background-color:rgb(70,70,70);
  opacity:0.6;
  border: none;
  color: white;
  padding: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 2px;
}
.toggledButton {
  font-style: oblique;
  font-weight: 600;
  background-color:rgb(0,200,200);
  opacity:0.6;
  border: none;
  color: white;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
.toggledButton:hover {
  background-color: rgb(0, 255, 255);
}`;

css();

function css() {
    const style = document.createElement("style");
    style.innerHTML = textStyle;
    document.head.appendChild(style);
}

function addButtonNewPage(){
  var element = document.getElementById("dropdownButton");

  if (element != null){
      element.remove(dropdownButton);
  }
  if (!window.location.search.includes("list")){
    if (window.location.pathname.includes("shorts") || window.location.pathname.includes("watch")){
      var elementYoutube = document.getElementById("end");

      const options = ["Max", "SD", "HQ", "MQ"];

      const defaultOption = document.createElement("div");
      defaultOption.setAttribute("id", "dropdownButton");
      defaultOption.setAttribute("class", "thumbbutao");
      defaultOption.textContent = "Thumbnail";
      if (elementYoutube != null){
        elementYoutube.before(defaultOption);
      }

      options.forEach(optionText => {
        const option = document.createElement("div");
        option.setAttribute("class", "butaostyle");
        option.textContent = optionText;
        option.addEventListener("click", () => newTabUrl(optionText));
        defaultOption.appendChild(option);
      });
    }
  }
}

function newTabUrl(chosen) {
  var theURLpathname = window.location.pathname;
  var chosenRes;

  if(chosen == "Max"){
    chosenRes = "/maxresdefault.jpg";
  }
  else if(chosen == "SD"){
    chosenRes = "/sddefault.jpg";
  }
  else if(chosen == "HQ"){
    chosenRes = "/hqdefault.jpg";
  }
  else{
    chosenRes = "/mqdefault.jpg";
  }

  var textoURL = window.location.href;
  var id = textoURL.replace(/https:\/\/www.youtube.com\/shorts\/|https:\/\/www.youtube.com\/watch\?v=/, "https://i.ytimg.com/vi/");
  window.open(id + chosenRes);
};

document.addEventListener("yt-navigate-finish", function() {
  addButtonNewPage();
}, false);

if(document.getElementById("dropdownButton") == null){
  addButtonNewPage();
}
