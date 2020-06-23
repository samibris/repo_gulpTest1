		function change(){
			var source ="";
			source = document.getElementById("text");
			if (source.innerHTML =="We need more of this!"){
				document.getElementById("text").innerHTML = "Beautiful Landscape!!!";
				document.getElementById("text").style.color = "blue";
				document.getElementById("text").style.fontFamily = "Arial";
				document.getElementById("text").style.fontSize= "larger";
			}else{
				document.getElementById("text").innerHTML = "We need more of this!";
				document.getElementById("text").style.color = "Yellow";
				document.getElementById("text").style.fontFamily = "Arial";
				document.getElementById("text").style.fontSize= "larger";
			}
			
		}
		

