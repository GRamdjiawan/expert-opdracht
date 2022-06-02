let people = [
    {
        firstname: 'Gianni',
        lastname: 'Ramdjiawan',
        age: 16,
        residence: 'Rijswijk',
    },
    {
        firstname: 'Haris',
        lastname: 'Mahmood',
        age: 17,
        residence: 'Ypenburg',
    },
    {
        firstname: 'Tom',
        lastname: 'Veenendaal',
        age: 17,
        residence: 'Wateringen',
    },
    {
        firstname: 'Thijs',
        lastname: 'Andeweg',
        age: 17,
        residence: 'Vroondaal',
    },
    {
        firstname: 'Roy',
        lastname: 'Hoeven',
        age: 17,
        residence: 'Wateringen',
    },
];

const cardPlace = document.querySelector('.card-container');


function showCards() {

    
    for (let i = 0; i < people.length; i++) {
        
        cardPlace.innerHTML += `
            <div class="card">
                <div class="info">
                    <span class="name">${people[i].firstname} ${people[i].lastname}</span>
                    <br>
                    <span class="age">${people[i].age} jaar</span>
                    <br>
                    <span class="residence">${people[i].residence}</span>
                </div>
            </div>
        
        `;
        
}

}


function addPerson() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        const addFirstname = document.querySelector('.firstnameInput').value;
        const addLastname = document.querySelector('.lastnameInput').value;
        const addAge = document.querySelector('.ageInput').value;
        const addResidence = document.querySelector('.firstnameInput').value;

        let obj = {
            firstname: addFirstname,
            lastname: addLastname,
            age: addAge,
            residence: addResidence,
        }

        people.push(obj)

        clearObjects();
        showCards();

    })
}

function clearObjects() {
    cardPlace.innerHTML = '';
}



addPerson();
showCards();
