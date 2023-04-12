// Carousal slide animation
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});


// Step Transition on btn click
const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .back-btn');
const form = document.querySelector('form');

nextBtn.forEach(button=>{
  button.addEventListener('click', (e) => {
    changeStep('next');
  })
})
prevBtn.forEach(button=>{
  button.addEventListener('click', (e) => {
    changeStep('prev');
  })
})

// form.addEventListener('submit', (e)=>){
//   e.prventDefault();
//   const inputs = [];
//   form.querySelectorAll('input').forEach(input=>{
//     const {name, value} = input;
//     inputs.push({name,value})
//   })
//   console.log(inputs)
//   form.reset();
// }

function changeStep(btn){
  let index = 0;
  const active = document.querySelector('form .step.active');
  index = steps.indexOf(active);
  steps[index].classList.remove('active');
  if(btn === 'next'){
    index++;
  }
  else if(btn === 'prev'){
    index --;
  }
  steps[index].classList.add('active')
  console.log(index)
}

function page_redirect(e){
  // e.preventDefault();
  console.log(
    "fdfb"
  );  
  window.location = "https://www.javatpoint.com/";  
  }  

  var form1 =document.getElementById("formId");
  var email =document.getElementById("emailId");
  var password =document.getElementById("passId");
async function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
   console.log("123");
   
  console.log(email.value , "emails");
   let myObject = await fetch('http://localhost/Auth/v2/lgn/an', {
    
    method: 'POST',
    
    headers: {
      
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({
      "email": email.value,
      "password": password.value
    })
  })
   console.log(myObject);

   let result = await myObject.json()
   console.log(result);

  if(result["status"] == "success") {
    window.location = "http://127.0.0.1:3000"
  } else {
    window.alert("Wrong Credentials")
  }

  //  window.location = "https://www.javatpoint.com/";  
}


form.addEventListener('submit', submitForm);