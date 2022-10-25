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