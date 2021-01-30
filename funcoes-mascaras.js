        function mask_date(){
	    var n_char = document.getElementById("txtData").value.length;
	   	
	    if (n_char == 2){
	    	document.getElementById("txtData").value = document.getElementById("txtData").value + "/";
            } else if (n_char == 5){
		document.getElementById("txtData").value = document.getElementById("txtData").value + "/";
	    }				
	}

	function mask_cep(){
	    var n_char = document.getElementById("txtCEP").value.length;
	   	
	    if (n_char == 5){
	    	document.getElementById("txtCEP").value = document.getElementById("txtCEP").value + "-";
            }			
	}

	function mask_phone(){
	    var n_char = document.getElementById("txtPhone").value.length;
	   	
	    if (n_char == 2){
	    	document.getElementById("txtPhone").value = "(" + document.getElementById("txtPhone").value + ") ";
            } else if (n_char == 9){
		document.getElementById("txtPhone").value = document.getElementById("txtPhone").value + "-";
	    }		
	}