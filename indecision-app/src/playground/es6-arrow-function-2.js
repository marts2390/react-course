
const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1060));

const user = {
    name: 'Andrew',
    cities: ['London', 'Melbourne', 'Brighton']
};

const multiplier = {
    numbers: ['67', '32', '21'],
    multiplyBy: '43',
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());