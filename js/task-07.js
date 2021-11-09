const formToLogin = document.querySelector('.login-form');
const userInformation = {}


const onSubmitLoginBtn = event => {
    
    event.preventDefault();
  
    const {
    elements:{ password, email }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('Внимание! Все поля должны быть заполнены!')
  }
   
    userInformation.password = password.value;
    userInformation.email = email.value
     console.log(userInformation)
    formToLogin.reset()
    
}

