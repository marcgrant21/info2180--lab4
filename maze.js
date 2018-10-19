window.onload =main;

function main() {
  let lefwal = document.getElementById("boundary1");
   lefwal.addEventListener("mouseover",function(){
     this.className = "boundary youlose";
   });
}
