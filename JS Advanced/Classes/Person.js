class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const myPerson = new Person("Stanislav","Dobrev",25,"stanislavdobrev98@gmail.com");
console.log(myPerson);
console.log(myPerson.toString());