const hamburgerButton = document.getElementById("hamburger");
const closeHamburger = document.getElementById("closeHamburger");
const sidenav = document.querySelector(".sideNav");
const contactsForm = document.querySelector('.contacts__rightSide')

function toggleButton(open) {
  open ? sidenav.classList.add("open") : sidenav.classList.remove("open");
}

hamburgerButton.addEventListener("click", () => {
  toggleButton(true);
});
closeHamburger.addEventListener("click", () => {
  toggleButton(false);
});
sidenav.addEventListener('click', ()=>{
  toggleButton(false)
})
contactsForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  let name  = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  console.log(name, email, message);

(function(){
  emailjs.init({
    publicKey: "ZXSeP8VDxwJh5IMAL",
  });
})();

  emailjs.send("service_8vmezek","template_nqc668e",{
    from_name: name,
    to_name: "inspikalu@gmail.com",
    message: message,
    from_email: email
  })
      .then(response => console.log('response'))
      .catch(error => console.log(error))
})
