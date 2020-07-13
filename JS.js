let ONAS = document.getElementById("onasS")
let NASESLUZBY = document.getElementById("nasesluzbyS")
let CENIK = document.getElementById("cenikS")
let FOTOGALERIE = document.getElementById("fotogalerieS")
let KONTAKTY = document.getElementById("kontaktyS")
let navigaceMenu = [ONAS, NASESLUZBY, CENIK, FOTOGALERIE, KONTAKTY]
let ONASs = document.getElementById("ONAS")
let NASESLUZBYs = document.getElementById("NASESLUZBY")
let CENIKs = document.getElementById("CENIK")
let FOTOGALERIEs = document.getElementById("FOTOGALERIE")
let KONTAKTYs = document.getElementById("KONTAKTY")
let navigaceS = [ONASs, NASESLUZBYs, CENIKs, FOTOGALERIEs, KONTAKTYs]

window.onscroll = function () { myFunction() };
if (window.pageYOffset > 0.5) { myFunction() };

function myFunction() {
  let hea = document.getElementById("menu");
  let stickyMenu = document.getElementById("stickyMenu");
  let sticky = hea.offsetTop;
  if (window.pageYOffset > 0.5) hea.classList.add("sticky"), stickyMenu.classList.remove("noDisplay");
  if (window.pageYOffset <= 0.5) hea.classList.remove("sticky"), stickyMenu.classList.add("noDisplay");
  for (let i = 0; i < navigaceMenu.length; i++) {
    const pozice = navigaceMenu[i];
    const navigace = navigaceS[i];
    if (pozice==null || navigace==null) continue;
    if (pozice.getBoundingClientRect().top < 100 && pozice.getBoundingClientRect().bottom > 100) {
      for (let i = 0; i < navigaceMenu.length; i++) {
        navigace.classList.remove("dependsOnScroll");
            }
      navigace.classList.add("dependsOnScroll");
    } else { navigace.classList.remove("dependsOnScroll") }
  }
}

let xan = new Date().getFullYear()
if (xan > 2019) document.getElementById("Footer").innerHTML = (`© 2019-` + xan);

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
    mergeWB.style.height = "0px";
    mergePC.style.height = "40px";
    mPCC.style.display = "table";
    mWBC.style.display = "none";
    if (event.type == 'mouseover') {
      mPCC.style.boxShadow = 'inset 0px 0px 15px 10px rgba(0, 0, 0, 0.4)'
      mPCC.style.background = 'rgba(174, 255, 97, 0.9)'
      setTimeout(function () { mPCC.style.background = ''; mPCC.style.boxShadow = 'inset 0px 0px 15px 10px rgba(0, 0, 0, 0.45)' }, 180);
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
    mergePC.style.height = "0px";
    mergeWB.style.height = "40px";
    mPCC.style.display = "none";
    mWBC.style.display = "table";
    if (event.type == 'mouseover') {
      mWBC.style.boxShadow = 'inset 0px 0px 15px 10px rgba(0, 0, 0, 0.25)'
      mWBC.style.background = 'rgba(200, 255, 47, 0.75)'
      setTimeout(function () {
        mWBC.style.background = ''; mWBC.style.boxShadow = 'inset 0px 0px 15px 10px rgba(0, 0, 0, 0.45)'
      }, 200);
    }
  }
}

function Function2() {
  let text= document.getElementById("clickToFill")
  text.classList.remove("noDisplay")
}
function Function3(){
  let text= document.getElementById("clickToFill")
  setTimeout(function () {text.classList.add("noDisplay")}, 100);
}
function Formular() {
  let text= document.getElementById("formular")
  text.classList.remove("noDisplay")
  document.body.style.overflow = "hidden"
}
function FormularZ() {
  let text= document.getElementById("formular")
  text.classList.add("noDisplay")
  document.body.style.overflow = ""
}
function Color(x) {
  if (x==0) { 
    document.getElementById("co").classList.add("default")
  }else{
    document.getElementById("co").classList.remove("default")
  }
  if (x=="nb"||x=="pc"||x=="sr") {
    document.getElementById("brand").classList.remove("noDisplay")
    document.getElementById("model").classList.remove("noDisplay")
  }else{
    document.getElementById("brand").classList.add("noDisplay")
    document.getElementById("model").classList.add("noDisplay")
  }
}

function setfilename(val) { 
  let file= document.getElementById("file").value;
  if (file !== undefined) {
    document.getElementById("jiny").innerHTML=(`<label for="file"  class="upload" onchange="setfilename(this.value);">Jiný soubor...<input id="file" class="noDisplay"
    type="file"></label>
    <p id="upload" onclick="clearFile()"></p>`)
  let x= file.toString().split(`\\`);
  document.getElementById("upload").innerHTML = x[x.length-1]; 
}else{
  document.getElementById("upload").classList.add("noDisplay")
  document.getElementById("jiny").innerHTML=(`<label for="file"  class="upload" onchange="setfilename(this.value);">Vyberte soubor...<input id="file" class="noDisplay"
  type="file"></label>
  <p id="upload" class="noDisplay"></p>`)
}
}
function clearFile() {
  document.getElementById("upload").classList.add("noDisplay")
  document.getElementById("jiny").innerHTML=(`<label for="file"  class="upload" onchange="setfilename(this.value);">Vyberte soubor...<input id="file" class="noDisplay"
  type="file"></label>
  <p id="upload" class="noDisplay"></p>`)
}

setTimeout(function () { console.log("html.working=true"); }, 800);
setTimeout(function () { console.log("css.working=true"); }, 1600);
setTimeout(function () { console.log("js.working=true"); }, 2400);
//</body>

/*let x= document.querySelector("#about");
about.clientTop

let aboutMenuItem = document.querySelector("#menu .about")
if(window.offsetY > about.clientTop)
aboutMenuItem.style.backgroundColor = "yellow"
document.body.style.overflow = "hidden"
scrollY ???
vpisovat class misto style do html
*/