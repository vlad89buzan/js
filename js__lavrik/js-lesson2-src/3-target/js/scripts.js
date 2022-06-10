window.addEventListener('load', function(){
	
	let box = document.querySelector('.box');
	let items = this.document.querySelectorAll('item');
	
	box.addEventListener('click', function(e){
		if(e.target.classList.contains('item')){
			let colors = ['#ff0', '#f00', '#00f'];
			let num = Math.floor(Math.random() * colors.length);
			e.target.style.color = colors[num];
		}
	});
	

});

