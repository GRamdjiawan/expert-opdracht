const btn = document.querySelector('.btn');
const img = document.querySelector('.showImg');
const show = document.querySelector('.hide');
const passwordInput = document.querySelector('.password');

function inputValue() {
    const password = document.querySelector('.password').value;
    
    if(password.toLowerCase() == 'h@ck3d') {
        show.classList.add('show')
    
        img.setAttribute('src', '../img/hacking.gif')
    } else {
        show.classList.add('show')
    
        img.setAttribute('src', '../img/failed.gif')
    }

}


btn.addEventListener('click', inputValue)

passwordInput.addEventListener('change',inputValue)