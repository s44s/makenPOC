/*menu code*/
var menuIcon = document.getElementById("menu-icon");
var menuList = document.getElementById("menu-list");
menuList.classList.add("is-hidden");

menuIcon.addEventListener('click', function (e) {
    'use strict';
    e.preventDefault();
    menuList.classList.toggle('is-hidden');
});



/*var colors = ["Wat heb je vandaag gedaan?", "Wat zou je graag willen doen?", "Wat heb je vandaag bereikt?", "Heb je vandaag iets leuks gedaan?"];

window.onload = function(){
    var arr = document.querySelectorAll("h3");
    for(var i=0;i<arr.length;i++){
         arr[i].style.background = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
    }
}

window.onload =function (){
    var tekst = document.querySelector("h3");
    for(var i=0;1<tekst.length;i++){
        tekst[i].
    }
}*/

//var button = document.getElementById("button");

var random = Math.random();

var mijnZinnen = new Array();
mijnZinnen[0] = "Wat heb je vandaag gedaan?";
mijnZinnen[1] = "Wat zou je graag willen doen?";
mijnZinnen[2] = "Wat heb je vandaag bereikt?";
mijnZinnen[3] = "Heb je vandaag iets leuks gedaan?";

var lengte = mijnZinnen.length;

window.onload = function(){
    document.getElementById("tekst").innerHTML = mijnZinnen[Math.floor(random*(lengte-1))];
}





 
/*var j = 0
var p = mijnZinnen.length;
var preBuffer = new Array()

window.onload =function (){
for (i = 0; i < p; i++){
   preBuffer[i] = new Array()
   preBuffer[i].src = mijnZinnen[i]
}
}

var whichText = Math.round(Math.random()*(p-1));
function showText(){
//This a wrapper for the text array it can be changed if need
document.write('<h3>'+theText[whichText]+'</h3>');
}*/