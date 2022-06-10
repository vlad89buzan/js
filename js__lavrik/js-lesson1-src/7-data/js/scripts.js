window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', changeColor);
	}
});

function changeColor(){
	
	console.log(this.dataset);
	this.style.color = this.dataset.color;
	
}