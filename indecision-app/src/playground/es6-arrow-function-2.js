const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(45, 12));

const user = {
    name: 'Chris',
    cities: ['London', 'Melbourne', 'Vancouver'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: ['10', '20', '30'],
    multiplyBy: '3',
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());