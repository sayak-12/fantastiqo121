// const faqs = document.querySelectorAll(".faq");

// faqs.forEach(faq => () => {
//     faq.addEventListener("click" , () => {
//         faq.classList.toggle("active");
//     })
// })
// wp = document.querySelector(".wp");
// document.querySelector(".wp").setAttribute(href, "https://wa.me/919534450785")
// wp.addEventListener("click", ()=>{
//     window.location.href = "https://wa.me/919534450785";
// })
var nameip = document.getElementById("nameinput");
var mailip = document.getElementById("mailinput");
var numip = document.getElementById("numinput");
const submitbtn = document.querySelector(".submit-btn");

function seterror(id, message) {
  alert("Please fill out " + id + " field correctly: " + message);
}
function validateform() {
  var returnval = true;
  if (
    document.getElementById("numinput").value[0] == "1" ||
    document.getElementById("numinput").value[0] == "2" ||
    document.getElementById("numinput").value[0] == "4" ||
    document.getElementById("numinput").value[0] == "5" ||
    document.getElementById("numinput").value == "9999999999" ||
    document.getElementById("numinput").value == "8888888888" ||
    document.getElementById("numinput").value == "7777777777" ||
    document.getElementById("numinput").value == "6666666666" ||
    document.getElementById("numinput").value == "0000000000"
  ) {
    seterror("mobile number", "Enter a valid mobile number");
    returnval = false;
  }
  return returnval;
}

// const accordion = document.getElementsByClassName('contentBx');
// for (i = 0; i<ccordion.length; i++ ){
//     ccordion[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

