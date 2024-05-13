$('.d-b-img').click(function(){
	$('.menu-title ').toggleClass('d-n');
});
$('.close-menu').click(function(){
	$('.menu-title ').toggleClass('d-n');
});
$('#active-filiter').click(function(){
	$('.filter ').toggleClass('d-n');close-filiter
});
$('#close-filiter').click(function(){
	$('.filter ').toggleClass('d-n');
});
$('.active-vector').click(function(){
	$('.vector ').toggleClass('d-n');
});
$('.close-vector').click(function(){
	$('.vector ').toggleClass('d-n');
});

var number = 0;
document.getElementById('increaseButton').addEventListener('click', function() {
  number++;
  document.getElementById('numberDisplay').textContent = number;
});
var number = 0;
document.getElementById('increaseButton-1').addEventListener('click', function() {
  number--;
  document.getElementById('numberDisplay').textContent = number;
});
const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(".card-carousel + .card-controller")