/*
Codaisseur Exercise: Hired by one member of the royal family
As a royal, addressing your people is easy. However, as I assume most of us are not, 
it might be very useful to create a program to figure out how to address royalty, 
in case they ever ask us to create their personal website... You never know!
*/

const employers = [
    {
        first_name: 'Charles',
        last_name: 'Peterson',
        title: 'Baron',
        gender: 'male'
    },

    {
        first_name: 'Erik',
        last_name: 'The third',
        title: 'King',
        gender: 'male'
    },
    {
        first_name: 'Amber',
        last_name: 'Taal',
        title: 'Baroness',
        gender: 'female'
    }
]

// Declare a variable 'findFormOfAddress' and assign it an anonymous function
// An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.

const findFormOfAddress = function (employer) {
    if (employer.title === 'King' || employer.title === 'Queen') {
        console.log('Your Majesty')
    } else if (employer.title === 'Prince' || employer.title === 'Princess') {
        console.log('Your Royal Highness')
    } else if (employer.title === 'Duke' || employer.title === 'Duchess') {
        console.log('Your Grace')
    } else if (employer.title === 'Baronet' || employer.title === 'Knight') {
        console.log(`Sir ${employer.first_name}`)
    } else if (employer.title === 'Dame') {
        console.log(`Dame ${employer.first_name}`)
        // console.log('It is a Marquess/Marchioness/Earl/Countess/Viscount/Viscountess/Baron/Baroness')
    } else {
        if (employer.gender === 'male') {
            console.log(`Lord ${employer.last_name}`)
        } else if (employer.gender === 'female') {
            console.log(`Lady ${employer.last_name}`)
        }
    }
}

employers.forEach(function (employer) {
    findFormOfAddress(employer)
})