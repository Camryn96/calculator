function clearScreen() {
	document.getElementById("result").value = "";
  }
  
  
  
  
  
  1;24
  function display(value) {
	document.getElementById("result").value += value;
  }
  1;25
  function calculate() {
	var p = document.getElementById("result").value;
	var q = eval(p);
	document.getElementById("result").value = q;
  }