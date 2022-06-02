const btn = document.querySelector('.btn');
const displayName = document.querySelector('.naam')

btn.addEventListener('click', () => {
    const firstname = document.querySelector('.voornaam').value;
    const lastname = document.querySelector('.achternaam').value;

    const lowerCaseFirstname = firstname.toLowerCase();
    const lowerCaseLastname = lastname.toLowerCase();
    
    const firstnameCaps = lowerCaseFirstname.charAt(0).toUpperCase() + lowerCaseFirstname.slice(1)
    const lastnameCaps = lowerCaseLastname.charAt(0).toUpperCase() + lowerCaseLastname.slice(1)
    
    
    displayName.innerHTML = `${firstnameCaps}  ${lastnameCaps}`


})