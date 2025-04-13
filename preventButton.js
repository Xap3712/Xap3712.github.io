function preventButton(elemName, eventName){
	console.log(elemName);
	console.log(eventName);
	//var form = document.getElementById("senderForm");
	var form = document.getElementById(elemName);
	function handleForm(event) { event.preventDefault(); } 
	//form.addEventListener('submit', handleForm);
	form.addEventListener(eventName, handleForm);
}