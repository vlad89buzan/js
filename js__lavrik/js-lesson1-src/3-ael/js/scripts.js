window.addEventListener('load', function(){
	let div = document.querySelector('.some');
	
	div.addEventListener('click', function(){
		div.innerHTML += '1';
	});

	div.addEventListener('click', function(){
		div.innerHTML += '2';
	});
});