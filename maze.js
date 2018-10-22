window.onload =main;

function main() {
  let lefwal = document.getElementById("boundary1");
   lefwal.addEventListener("mouseover",function(){
     this.className = "boundary youlose";
   });
   //Exercise 2
   let allboundary = document.querySelectorAll(".boundary");
   	let data = -1;

   	for(var w = 0; w < allboundary.length; w++){
   		if(allboundary[w].className.indexOf("example") != -1){
   			data = w;
   		}else{
   			allboundary[w].addEventListener("mouseover", function(){
   			//	document.getElementById("status").textContent = "You lose!"
   				for(var w = 0; w < allboundary.length; w++){
   					if( w != data){
   						allboundary[w].className = "boundary youlose";
   					}
   				}
   			});
   		}
   	}
    //Exercise 3
    /*var end = document.getElementById("end");

    	end.addEventListener("mouseover", function(){
    		if (document.getElementsByClassName("boundary youlose").length == 0){
    			alert("You Win!!");
    		}
    	});*/

      // Exercise 4
      let restart = document.getElementById("start");
    	let status = document.getElementById("status");

    	restart.addEventListener("click", function(){
    		var mazwal = document.querySelectorAll(".boundary");
    		if (mazwal.length != 0){
    			for(var w = 0; w < mazwal.length; w++){
    				if(mazwal[w].className == "boundary example"){
    					continue;
    				}
    				mazwal[w].className = "boundary";
    			}

    			status.textContent = "Move your mouse over the \"S\" to begin.";
    		}
    	});
}
