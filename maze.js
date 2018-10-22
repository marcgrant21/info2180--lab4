window.onload =main;

function main() {
  let lefwal = document.getElementById("boundary1");
   lefwal.addEventListener("mouseover",function(){
     this.className = "boundary youlose";
   });

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
    var end = document.getElementById("end");

    	end.addEventListener("mouseover", function(){
    		if (document.getElementsByClassName("boundary youlose").length == 0){
    			alert("You Win!!");
    		}
    	});
}
