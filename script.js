const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async(e)=>{
  e.preventDefault();

  status.innerHTML = "Sending...";

  let data = new FormData(form);

  const res = await fetch("https://formspree.io/f/YOUR_ID", {
    method:"POST",
    body:data,
    headers:{ "Accept":"application/json" }
  });

  if(res.ok){
    status.innerHTML = "Message Sent Successfully ✅";
    form.reset();
  } else {
    status.innerHTML = "Failed ❌ Try Again";
  }
});
