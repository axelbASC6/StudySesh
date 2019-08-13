let SchoolName = document.getElementById("SchoolName").innerText
let mathSubject = document.getElementById("Math");
let historySubject = document.getElementById("History");
let scienceSubject = document.getElementById("Science");
let englishSubject = document.getElementById("English");
let worldLanguageSubject = document.getElementById("World Language");
let Selected = document.getElementsByClassName("BackSubject"); 
let displayRanGen = document.getElementById("randomGenerator");  
let search = document.getElementsByClassName("Submit")[0];
let inputVal = document.getElementById("schoolForm") 
var x = document.getElementsByClassName("dropdown")[0]
let SelectedCourse = document.getElementById("BackCourse");

  

function makeRand() { 
  displayRanGen.innerText = "Your Code: " + makeid(5)
}


document.getElementById("schoolForm").style.width= "40vw";
document.getElementById("schoolForm").style.fontStyle="14pt";
function showSubject(){
  if(SchoolName != ""){
  x.style.display = "block";
  }
} 

search.addEventListener('click', searchPlace); 
function findPlace(name) {
    let url = `https://data.cityofnewyork.us/resource/r2nx-nhxe.json?$where=upper(location_name)=upper('${name}')`; 
    fetch(url) 
    .then((response) => response.json()) 
    .then(function(data) { 
        console.log(data);  
        let name = data.location_name 
        console.log(name)      
        console.log(makeid(5));   
      
    }) 
    .catch(function(error)  {
    console.log(error);
    })
}
function searchPlace() {  
let value = inputVal.value 
if(value.toLowerCase() === value.toLowerCase())
findPlace(value.trim());
}
//let Course = document.getElementById("BackCourse").innerText
let math = document.getElementById("Math")
let history = document.getElementById("History")
let science = document.getElementById("Science")
let english = document.getElementById("English")
let worldLang = document.getElementById("WorldLanguage")
let y = document.getElementsByClassName("dropdown")[1]
let a = document.getElementsByClassName("dropdown")[2]
let b = document.getElementsByClassName("dropdown")[3]
let c = document.getElementsByClassName("dropdown")[4]
let d = document.getElementsByClassName("dropdown")[5]
// function test(){
//   document.getElementById("CourseSelect").innerText = 

math.addEventListener("click", filldiv1)
function filldiv1(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "Math"
  y.style.display = "block"
  x.style.display = "none"
}
historySubject.addEventListener("click",filldiv2)
function filldiv2(){
var x = document.getElementsByClassName("dropdown")[0]
Selected.innerText = "History"
x.style.display = "none"
a.style.display = "block"
}
scienceSubject.addEventListener("click",filldiv3)
function filldiv3(){
var x = document.getElementsByClassName("dropdown")[0]
Selected.innerText = "Science"
d.style.display = "block"
x.style.display = "none"
b.style.display = "block"
}
englishSubject.addEventListener("click",filldiv4)
function filldiv4(){
var x = document.getElementsByClassName("dropdown")[0]
Selected.innerText = "English"
x.style.display = "none"
c.style.display = "block"
}
worldLang.addEventListener("click",filldiv5)
function filldiv5(){
  var x = document.getElementsByClassName("dropdown")[0]
  Selected.innerText = "World Language"
  x.style.display = "none"
  d.style.display = "block"
}   


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
  return result;   
} 
 

function reset(){
  y.style.display = "none"
  a.style.display = "none"
  b.style.display = "none"
  c.style.display = "none"
  d.style.display = "none"
  x.style.display = "block"
}