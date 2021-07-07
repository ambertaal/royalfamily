// Declare a variable 'employer' and assign it an object.

const employer = {
    first_name: 'Charles',
    last_name: 'Peterson',
    title: 'Baron',
    gender: 'male'
}

// Log the properties of your employer-object in your console to check whether you did not make any mistakes.

console.log(Object.values(employer));
// expeted output: Array [ 'Charles', 'Peterson', 'Baron', 'male' ]

// Anonymous function
// An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.


let findFormOfAddress = (function () {
    console.log(employer);
})();
