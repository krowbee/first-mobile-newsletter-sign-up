const articleCard = document.querySelector(".card")
const emailForm = document.querySelector('form')
const button = document.querySelector(".card__success-button")
const strongText = document.querySelector(".card__email-strong")

let errorState = false;

const validation = (email) =>{
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const toggleSuccess = () => {
    articleCard.classList.toggle("success-message")
}

const toggleError = () => {
    emailForm.classList.toggle("error-message")
    errorState = !errorState
    
}

button.addEventListener("click", toggleSuccess);

emailForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    let userEmail = data.get('email');

    if (validation(userEmail)){
        
        if (errorState){
            toggleError()
        }

        toggleSuccess()
        strongText.textContent = userEmail;
        
    } else{
        toggleError()
    }

})


