var nameVar = 'Andrew';
console.log('nameVar', nameVar);

let nameLet = 'Steve';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


const fullName = 'Christopher Andrew Martyr';
let firstName;
let middleName;
let lastName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    middleName = fullName.split(' ')[1];
    lastName = fullName.split(' ')[2];
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}
console.log(firstName);
console.log(middleName);
console.log(lastName);