
const form = document.getElementById('form');
const email = document.getElementById('email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


form.addEventListener('submit', (e)=>{

    if(!email.value.match(pattern)){
        form.classList.add('wrong');
        e.preventDefault();
    }
})

email.addEventListener('keyup', ()=>{

    if(email.value.match(pattern)){
        form.classList.remove('wrong'); 
    }else{
        form.classList.add('wrong');     
    }
})