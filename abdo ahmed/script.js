const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const btnPopup = document.querySelector('.btnLogin-popup');
 const iconClose = document.querySelector('.icon-close');
 const forgot = document.querySelector('.forgot');
 
 iconClose?.addEventListener('click', ()=>{
  wrapper.classList.add('hide');
})

 registerLink?.addEventListener('click', ()=> {
     wrapper.classList.add('active');
 });

 loginLink?.addEventListener('click', ()=> {
     wrapper.classList.remove('active');
});

btnPopup?.addEventListener('click', ()=> {
  wrapper.classList.remove('hide');
});

iconClose?.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

forgot.addEventListener('click',function(){
  wrapper.classList.add('active');
});
let informationUser;
    if(localStorage.Data != null){
        informationUser = JSON.parse(localStorage.Data)
    }else{
        informationUser = [];
    }
    button.onclick = function() {
    const usernameValue = registerUsername.value.trim();
    const emailValue = registerEmail.value.trim();
    const passwordValue = registerPassword.value.trim();

        let object = {
            username:usernameValue,
            email:emailValue,
            password:passwordValue,
        }
        informationUser.push(object)
        localStorage.setItem('Data', JSON.stringify(informationUser))
       
   }