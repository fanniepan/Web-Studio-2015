var pTag = document.querySelector('p');
var button = document.querySelector('#buttonID');
var overlay = document.querySelector('#overlay');
var overlay2 = document.querySelector('#overlay2');
var defaultButton = document.querySelector('#defaultButton');


button.onclick = function() {
  overlay.classList.add('show');
}
button.onmouseover = function() {
	button.classList.add('hover');
} 
button.onmouseout = function() {
	button.classList.remove('hover');
} 
defaultButton.onclick = function() {
	overlay2.classList.add('show');
}