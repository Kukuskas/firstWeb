window.onscroll = function () { myFunction() };
function myFunction() {
  var hea = document.getElementById("menu");
  var sticky = hea.offsetTop;
 
    if (window.pageYOffset > 0.5) {
        hea.classList.add("sticky");
    } 
    if (window.pageYOffset <=1){
        hea.classList.remove("sticky");
    }
}
console.log("funguje");

  let xan=new Date().getFullYear()
if (xan>2019) {
  document.getElementById("Footer").innerHTML=( `© 2019-`+ xan)
} 

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// } 
