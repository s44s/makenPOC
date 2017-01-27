function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
var tijd = h + ":" + m + ":" + s;

var random = Math.random();

var mijnZinnenAvond = new Array();
mijnZinnenAvond[0] = "Wat heb je vandaag gedaan?";
mijnZinnenAvond[1] = "Wat zou je graag willen doen?";
mijnZinnenAvond[2] = "Wat heb je vandaag bereikt?";
mijnZinnenAvond[3] = "Heb je vandaag iets leuks gedaan?";

var lengteAvond = mijnZinnenAvond.length;

var mijnZinnenOchtend= new Array();
mijnZinnenOchtend[0] = "Wat ga je doen vandaag?";
mijnZinnenOchtend[1] = "Wat zou je graag willen doen?";
mijnZinnenOchtend[2] = "Wat wil je vandaag bereiken?";
mijnZinnenOchtend[3] = "Hoe wil je je voelen vandaag?";
mijnZinnenOchtend[4] = "De zon schijnt vandaag, ben jij al buiten geweest?";

var lengteOchtend = mijnZinnenOchtend.length;

if (d.getHours() >= 12 && d.getMinutes() >= 00) {
   document.getElementById("question-important").innerHTML = mijnZinnenAvond[Math.floor(random*(lengteAvond))];
} else{
  document.getElementById("question-important").innerHTML = mijnZinnenOchtend[Math.floor(random*(lengteOchtend))];
}
