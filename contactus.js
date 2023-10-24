if(localStorage.getItem('textValues1') == null){
	var mail =[];
}else{
	mail =  JSON.parse(localStorage.getItem('textValues1'));
}

if(localStorage.getItem('textValues1') == null){
	var address =[];
}else{
	address =  JSON.parse(localStorage.getItem('textValues1'));
}

if(localStorage.getItem('textValues1') == null){
	var country =[];
}else{
	country =  JSON.parse(localStorage.getItem('textValues1'));
}

if(localStorage.getItem('textValues1') == null){
	var city =[];
}else{
	city =  JSON.parse(localStorage.getItem('textValues1'));
}

if(localStorage.getItem('textValues1') == null){
	var comments =[];
}else{
	comments =  JSON.parse(localStorage.getItem('textValues1'));
}



function contactforus(){
	mail.push(document.getElementById("inputEmail4").value);
	localStorage.setItem('textValues1', JSON.stringify(mail))
    
    address.push(document.getElementById("inputAddress").value);
	localStorage.setItem('textValues1', JSON.stringify(address))

    country.push(document.getElementById("ControlSelect2").value);
	localStorage.setItem('textValues1', JSON.stringify(country))

    city.push(document.getElementById("inputCity").value);
	localStorage.setItem('textValues1', JSON.stringify(city))

    comments.push(document.getElementById("exampleFormControlTextarea1").value);
	localStorage.setItem('textValues1', JSON.stringify(comments))


    window.alert(mail + address + country + city+ comments);
}

