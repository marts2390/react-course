class Person {
    constructor(name = 'Moon Man', location='The Moon', greeting='Greetings', age='0') {
       this.name = name; 
       this.location = location;
       this.greeting = greeting;
       this.age = age;
    }
    getGreeting() {
        return `${this.greeting}, ${this.name} from ${this.location}`;
    }
    getDescription() {
        return `${this.name} is from ${this.location} and is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, location, greeting, age, degree) {
        super(name, location, greeting, age);
        this.degree = degree;
    }
    hasDegree() {
        return !!this.degree;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasDegree()) {
            description += `, and my degree is ${this.degree}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, location, greeting, age, degree, homeLocation) {
        super(name, location, greeting, age, degree);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let newGreeting = super.getGreeting();
        if (this.hasHomeLocation()) {
            newGreeting = `${this.greeting}. I am ${this.name} and I'm visiting from ${this.homeLocation}, but I live in ${this.location}.`;
        } else {
            newGreeting = `${this.greeting}. I am ${this.name}, and I live on ${this.location}.`
        }

        return newGreeting
    }
}

const me = new Traveler('Chris Martyr', 'Vancouver', 'Hello there', '29', 'Computer Science', 'Brighton');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

