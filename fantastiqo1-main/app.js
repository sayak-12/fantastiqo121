const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle("active");
    })
})

// const accordion = document.getElementsByClassName('contentBx');
// for (i = 0; i<ccordion.length; i++ ){
//     ccordion[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }
