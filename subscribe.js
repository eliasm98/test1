
if(localStorage.getItem('textValues') == null){
	var submail =[];
}else{
	submail =  JSON.parse(localStorage.getItem('textValues'));
}


function sub(){
	submail.push(document.getElementById("submittingmail").value);
	localStorage.setItem('textValues', JSON.stringify(submail))
}