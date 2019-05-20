var calcButton = document.getElementById("calcButton");

function calc() {
	var hour1 = parseFloat(document.getElementById("hour1").value);
	var minute1 = parseFloat(document.getElementById("minute1").value);
	var hour2 = parseFloat(document.getElementById("hour2").value);
	var minute2 = parseFloat(document.getElementById("minute2").value);
	var num1;
	var num2;

	if (!hour1) {
		document.getElementById("eText").textContent = "Please insert value on input 1"; 
		return null;
	} else if (!minute1) {
		document.getElementById("eText").textContent = "Please insert value on input 2"; 
		return null;
	} else if (!hour2) {
		document.getElementById("eText").textContent = "Please insert value on input 3"; 
		return null;
	} else if (!minute2) {
		document.getElementById("eText").textContent = "Please insert value on input 4"; 
		return null;
	} else {
		num1 = (hour1 * 60) + minute1;
		num2 = (hour2 * 60) + minute2;
		document.getElementById("rText").innerHTML = "Result :<br>" + (num1 + num2) + " Minutes<br>";
		num1 = hour1 + (minute1 / 60);
		num2 = hour2 + (minute2 / 60);
		document.getElementById("rText").innerHTML += (num1 + num2) + " Hours"; 

	} 
}

calcButton.addEventListener("click", calc);

var d = new Date();
document.getElementById("version").innerHTML = "Version 1.0.2019520.122501.LM<br>© " + d.getFullYear() + " CamCamBos";
