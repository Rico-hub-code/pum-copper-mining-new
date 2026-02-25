// PRELOADER
window.addEventListener("load",()=>{
  document.getElementById("preloader").style.display="none";
});

// SCROLL PROGRESS
window.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let progress=(scrollTop/height)*100;
  document.getElementById("progress-bar").style.width=progress+"%";
});

// COUNTERS
const counters=document.querySelectorAll(".counter");
const speed=200;

const runCounter=(counter)=>{
  const target=+counter.getAttribute("data-target");
  const update=()=>{
    const count=+counter.innerText;
    const inc=target/speed;
    if(count<target){
      counter.innerText=Math.ceil(count+inc);
      setTimeout(update,20);
    }else{
      counter.innerText=target;
    }
  };
  update();
};

window.addEventListener("scroll",()=>{
  counters.forEach(counter=>{
    const top=counter.getBoundingClientRect().top;
    if(top<window.innerHeight){
      runCounter(counter);
    }
  });
});

// SLIDER AUTO
let slideIndex=0;
setInterval(()=>{
  const slides=document.querySelector(".slides");
  slideIndex=(slideIndex+1)%4;
  slides.style.transform=`translateX(-${slideIndex*100}%)`;
},4000);

// MODAL
function openModal(){
  document.getElementById("consultModal").style.display="flex";
}

function closeModal(){
  document.getElementById("consultModal").style.display="none";
}

let currentStep = 0;
function nextStep(){
  const steps = document.querySelectorAll(".step");
  steps[currentStep].classList.remove("active");
  currentStep++;
  steps[currentStep].classList.add("active");
}

// WHATSAPP SUBMIT
document.getElementById("consultForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let message =
  "New Consultation Request:%0A%0A" +
  "Full Name: " + name.value + "%0A" +
  "Email: " + email.value + "%0A" +
  "Phone: " + phone.value + "%0A" +
  "Company: " + company.value + "%0A" +
  "Project Type: " + project.value + "%0A" +
  "Project Details: " + details.value;

  window.open("https://wa.me/260772786809?text=" + message, "_blank");
});