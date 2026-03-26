// ==UserScript==
// @name        Thumbnail Grabber
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @version     2.5
// @author      Kouta e D-zero
// @description 09/03/2026 09:00:00
// ==/UserScript==

const textStyle = `
.dropdownContent {
  position: relative;
  display: none;
  font-style: oblique;
  font-weight: 600;
  background-color:rgb(70,70,70);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 8px;
}

.dropdownContent:hover {
  background-color: grey;
}

.thumbbutao {
  position: relative;
  font-style: oblique;
  font-weight: 600;
  background-color:rgb(70,70,70);
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  margin: 2px 2px;
  cursor: pointer;
  border-radius: 2px;
}

.thumbbutao:hover .dropdownContent{
  display: block;
}

.thumbbutao:hover {
  top: 70px;
}`;

GM_addStyle(textStyle);

function GM_addStyle(aCss) {
  'use strict';
  let head = document.getElementsByTagName('head')[0];
  if (head) {
    let style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.textContent = aCss;
    head.appendChild(style);
    return style;
  }
  return null;
};

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
        option.setAttribute("class", "dropdownContent");
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
