window.onscroll = function () { myFunction() };
function myFunction() {
  var hea = document.getElementById("menu");
  var sticky = hea.offsetTop;

  if (window.pageYOffset > 0.5) {
    hea.classList.add("sticky");
  }
  if (window.pageYOffset <= 1) {
    hea.classList.remove("sticky");
  }
}
console.log("funguje");

let xan = new Date().getFullYear()
if (xan > 2019) {
  document.getElementById("Footer").innerHTML = (`© 2019-` + xan)
}

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// } 


let mergePC = document.getElementById("mergePC");
let mPCC = document.getElementById("mPCC");
let mergeWB = document.getElementById("mergeWB");
let mWBC = document.getElementById("mWBC");
function handler1(event) {


  let PCC = document.getElementById("PCC")
  let WBC = document.getElementById("WBC")
  if (event.type == 'mouseover') {
    PCC.classList.add("pover")
    WBC.classList.remove("pover")


  }
  if (mergeWB.style.height === "40px") {
    setTimeout(function () { mergeWB.style.height = "0px"}, 200);
    mergePC.style.height = "40px";
    mPCC.style.display = "table";
    mWBC.style.display = "none";
    if (event.type == 'mouseover') {
      mPCC.style.background = 'rgb(198, 243, 180)'
      setTimeout(function () { mPCC.style.background = '' }, 200);
    }
  }

}
function handler2(event) {


  let PCC = document.getElementById("PCC")
  let WBC = document.getElementById("WBC")
  if (event.type == 'mouseover') {
    WBC.classList.add("pover")
    PCC.classList.remove("pover")
  }
  if (mergePC.style.height === "40px") {
    setTimeout(function () { mergePC.style.height = "0px"}, 200);
    mergeWB.style.height = "40px";
    mPCC.style.display = "none";
    mWBC.style.display = "table";
    if (event.type == 'mouseover') {
      mWBC.style.background = 'rgb(198, 243, 180)'
      setTimeout(function () { mWBC.style.background = '' }, 200);
    }
  }

}
