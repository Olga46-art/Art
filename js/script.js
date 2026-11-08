// PORPHYRA GLOBAL — скрипти сайту
document.getElementById('go').addEventListener('click',function(){
var v=document.getElementById('em').value,o=document.getElementById('ok');
o.textContent=/^\S+@\S+\.\S+$/.test(v)?'Дякуємо! Ми зв’яжемося з вами.':'Введіть адресу у форматі name@example.com.'});
var vs=document.querySelectorAll('#video video');
vs.forEach(function(a){a.addEventListener('play',function(){vs.forEach(function(b){if(b!==a)b.pause()})})});
