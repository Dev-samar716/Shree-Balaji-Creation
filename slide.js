const button = document.getElementById("btn"); 


const images = [
     'pexels-fauxels-3182750.jpg', 
     'pexels-yankrukov-7693707.jpg', 
     'pexels-ivan-samkov-8117405.jpg'
 ]; 

 const slides = document.querySelector('.slides'); 

 for(let i = 0; i < images.length; i++) { 
      const img = document.createElement("img");
       img.src = images[i]; 
       slides.appendChild(img);
 } 
let index = 0;
 setInterval(()=>{
     index++; 
      if(index >= images.length) {
        index = 0;
      } 

      slides.style.transform = `translateX(-${index * 100}%)`;
 },5000)


  function toggle() {
     const box = document.getElementById("flex-container"); 
     box.classList.toggle("Open"); 
     if(box.classList.contains("Open")) {
          setTimeout(function(){
               box.scrollIntoView({behavior:"smooth"})
          }, 300);
     }
  } 
 
   btn.addEventListener("click", ()=>{
         toggle();
   }); 

 const container1 = document.querySelectorAll('.gr-image'); 
 let Idx = 0;
      
  setInterval(() =>{
      container1[Idx].classList.remove('active'); 
      Idx++; 
      if(Idx >= container1.length ) {
          Idx = 0; 
      } 
      container1[Idx].classList.add('active');
  }, 5000) 

   const container2 = document.querySelectorAll('.d-image'); 
 let current = 0;
      
  setInterval(() =>{
      container2[current].classList.remove('show'); 
      current++; 
      if(current >= container2.length ) {
          current = 0; 
      } 
      container2[current].classList.add('show');
  }, 5000) 

  const container3 = document.querySelectorAll('.b-image'); 
 let ind = 0;
      
  setInterval(() =>{
      container3[ind].classList.remove('show'); 
      ind++; 
      if(ind >= container3.length ) {
          ind = 0; 
      } 
      container3[ind].classList.add('show');
  }, 5000) 

  const container4 = document.querySelectorAll('.p-image'); 
 let crr = 0;
      
  setInterval(() =>{
      container4[crr].classList.remove('show'); 
      crr++; 
      if(crr >= container4.length ) {
          crr = 0; 
      } 
      container4[crr].classList.add('show');
  }, 5000) 

  function toggleText() {
      const block = document.getElementById("temp-container"); 
      block.classList.toggle('Open'); 
      if(block.classList.contains('Open')) {
         setTimeout(function() {
              block.scrollIntoView({behavior:"smooth"});
         }, 300);
      }
  } 

  const button1 = document.getElementById("button-1"); 
  button1.addEventListener("click", ()=> {
       toggleText();
  }) 

  function scrollText() {
       const content = document.getElementById("dev-temp"); 
        content.classList.toggle('Open'); 
      if(content.classList.contains('Open')) {
         setTimeout(function() {
              content.scrollIntoView({behavior:"smooth"});
         }, 300);
      }
  } 

  const button2 = document.getElementById("button-2");
  button2.addEventListener("click", function(){
        scrollText();
  }) 

  function scrollContent() {
       const text = document.getElementById("Printing-services"); 
       text.classList.toggle('Open'); 
      if(text.classList.contains('Open')) {
         setTimeout(function() {
              text.scrollIntoView({behavior:"smooth"});
         }, 300);
      }
  } 

  const button3 = document.getElementById("button-3"); 

  button3.addEventListener("click", function(){
        scrollContent();
  })  

  const btn1 = document.getElementById("btn"); 

  function showText() {
    const cards = document.getElementById("flex-container"); 
    cards.classList.toggle('Open'); 
    if(cards.classList.contains('Open')) {
        setTimeout(function() {
             cards.scrollIntoView({behavior:"smooth"});
        }, 300);
    }
  } 

  const img_arr = document.querySelectorAll('.ph-image'); 
  let current_img = 0; 
   
  setInterval(()=> {
      img_arr[current_img].classList.remove('show'); 
      current_img++; 
      if(current_img >= img_arr.length) {
        current_img = 0; 
      } 
      img_arr[current_img].classList.add('show');
  }, 5000); 

  const button4 = document.getElementById("button-4"); 

  function showBranding() { 
    const branding = document.getElementById("Branding"); 
    branding.classList.toggle('Open'); 
    if(branding.classList.contains('Open')) {
        setTimeout(function() {
            branding.scrollIntoView({behavior:"smooth"})
        },300);
    }
  } 

  button4.addEventListener("click", ()=> {
       showBranding();
  }) 

  const button5 = document.getElementById("button-5");
  const photography = document.getElementById("photography-services"); 

  function showPhotography() { 
   photography.classList.toggle('Open'); 
    if(photography.classList.contains('Open')) {
        setTimeout(function() {
            photography.scrollIntoView({behavior:"smooth"})
        },300);
    }
  } 

  button5.addEventListener("click", ()=> {
       showPhotography();
  }) 