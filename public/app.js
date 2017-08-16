window.onload = function() {
	console.log("JS Ready");

	var submit = document.getElementById('submitNumber');

	submit.addEventListener('submit', function(evt) {
		evt.preventDefault();
		var number = document.getElementById('number');
		var category = document.getElementById('category');
		var request = new XMLHttpRequest();
		var url = `http://numbersapi.com/${number.value}/${category.value}`;
		request.onreadystatechange = function(){
			if (request.readyState === XMLHttpRequest.DONE){
				document.getElementById('response').innerHTML = request.responseText;
			}
		}
		
		request.open('GET', url);
		request.send();

		
		

	});
}