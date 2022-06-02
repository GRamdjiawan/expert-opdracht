let firstname =  prompt("Wat is uw voornaam?")
let lastname =  prompt("Wat is uw achternaam?")




function getName(firstname, lastname) {
    const lowerCaseFirstname = firstname.toLowerCase();
    const lowerCaseLastname = lastname.toLowerCase();
    
    const firstnameCaps = lowerCaseFirstname.charAt(0).toUpperCase() + lowerCaseFirstname.slice(1)
    const lastnameCaps = lowerCaseLastname.charAt(0).toUpperCase() + lowerCaseLastname.slice(1)
    
    console.log(firstnameCaps, lastnameCaps);

}

getName(firstname, lastname)