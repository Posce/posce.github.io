function lifebar(){

var hBar = document.getElementById("hBar");
var bar = document.getElementById("bar");
var hit = document.getElementById("hit");

var total = hBar.dataset.total;
var value = hBar.dataset.value;
var damage = hBar.dataset.damage;

var newValue = value - damage;
var barWidth = (newValue / total) * 100;
var hitWidth = (damage / value) * 100 + "%";

hit.style.width = hitWidth;
hBar.dataset.value = newValue;

setTimeout(function(){
  hit.style.width = 0;
  bar.style.width = barWidth + "%";
}, 500);

var sBar = document.getElementById("sBar");
var bar2 = document.getElementById("bar2");
var hit2 = document.getElementById("hit2");

var total2 = sBar.dataset.total;
var value2 = sBar.dataset.value;
var damage2 = sBar.dataset.damage;

var newValue2 = value2 - damage2;
var barWidth2 = (newValue2 / total2) * 100;
var hitWidth2 = (damage2 / value2) * 100 + "%";

hit2.style.width = hitWidth2;
sBar.dataset.value = newValue2;

setTimeout(function(){
  hit2.style.width = 0;
  bar2.style.width = barWidth2 + "%";
}, 500);

var mBar = document.getElementById("mBar");
var bar3 = document.getElementById("bar3");
var hit3 = document.getElementById("hit3");

var total3 = mBar.dataset.total * 2;
var value3 = +mBar.dataset.value + +mBar.dataset.total;
var damage3 = mBar.dataset.damage;

var newValue3 = value3 - damage3;
var barWidth3 = (newValue3 / total3) * 100;
var hitWidth3 = (damage3 / value3) * 100 + "%";

hit3.style.width = hitWidth3;
mBar.dataset.value = newValue3 - mBar.dataset.total;

if (newValue3 === 0){
  mBar.classList.add("emptySenno");
}
else{
  mBar.classList.remove("emptySenno");
}

setTimeout(function(){
  hit3.style.width = 0;
  bar3.style.width = barWidth3 + "%";
}, 500);

}
lifebar();