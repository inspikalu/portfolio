const hamburgerButton = document.getElementById("hamburger");
const closeHamburger = document.getElementById("closeHamburger");
const sidenav = document.querySelector(".sideNav");
const contactsForm = document.querySelector('.contacts__rightSide')
const popUp = document.querySelector('.popUp')
const popUpMessage = document.querySelector('.popUp .message')
const popUpClose = document.querySelector('.popUpClose')
const sendButton = document.querySelector('#sendBtn')

function toggleButton(open) {
    open ? sidenav.classList.add("open") : sidenav.classList.remove("open");
}

hamburgerButton.addEventListener("click", () => {
    toggleButton(true);
});
closeHamburger.addEventListener("click", () => {
    toggleButton(false);
});
sidenav.addEventListener('click', () => {
    toggleButton(false)
})
contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendButton.classList.add('dontClick')

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    (function () {
        emailjs.init({
            publicKey: "ZXSeP8VDxwJh5IMAL",
        });
    })();

    emailjs.send("service_8vmezek", "template_nqc668e", {
        from_name: name,
        to_name: "inspikalu@gmail.com",
        message: message,
        from_email: email
    })
        .then(response => {
            popUpMessage.innerHTML = `Email Sent Successfully, ${response ? response.text : ""}`
            popUp.classList.add('open')
            sendButton.classList.remove('dontClick')
            contactsForm.reset();
        })
        .catch(error => {
            popUpMessage.innerHTML = `There was an error, ${error ? error : ""}`
            popUp.classList.add('open')
            sendButton.classList.remove('dontClick')

        })
})
popUpClose.addEventListener('click', () => {
    popUp.classList.remove('open')
})
popUp.addEventListener('click', () => {
    popUp.classList.remove('open')
})

