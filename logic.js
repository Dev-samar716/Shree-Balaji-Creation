const btn = document.getElementById("btn-1"); 
const info = document.getElementById("h-des");  
const link = document.getElementById("links-2"); 

link.addEventListener("click", (e)=> { 
      link.style.background = "lightgray";
})
let hide = false;

function toggleText(box) { 
    box.classList.toggle("Open"); 
    if(box.classList.contains("Open")) {
        setTimeout(function() {
            box.scrollIntoView({behavior:"smooth"});
        }, 300);
    }
 }  
 
  function check(btn) { 
    if(btn.textContent == "See More") {
        btn.textContent = "Hide";
    } else if(btn.textContent == "Hide") {
        btn.textContent = "See More";
    }
 }

 btn.addEventListener("click", ()=> {
      toggleText(info); 
      check(btn);
 })   
  
