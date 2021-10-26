class Person{
    #id
    constructor(firstName, sureName, salary, age, id) {
        this.firstName = firstName;
        this.sureName = sureName;
        this.salary = salary;
        this.age = age;
        this.#id = id
    }

    get getFullName(){
        return `${this.firstName} ${this.sureName}`;
    }

    get getSalary(){
        return this.salary + "$"
    }

    set changeSalary(val) {
        if (typeof val === "number"){
            this.salary = val
        } else {
            console.log("The salary must be in numbers")
        }
    }

    get getYearOfBirth(){
        return (new Date().getFullYear() - this.age)
    }
}


newPerson = new Person("amit","fikler", 100, 21,50)