window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.parentNode.querySelector('.answer');
		if(answer.classList.contains('visible')){
			answer.classList.remove('visible');

			function removeOpenClass(){
				console.log('here');
				answer.classList.remove('open');
				answer.removeEventListener('transitionend', removeOpenClass)
			}
			answer.addEventListener('transitionend', removeOpenClass);
		
		}
		else {
			answer.classList.add('visible');
			answer.classList.add('open');

		}
	}

});