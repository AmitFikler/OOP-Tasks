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


class Player extends Person{
    constructor(firstName, sureName, salary, age, id, strongLeg, position, celebrationSentence){
        super(firstName, sureName, salary, age, id);
        this.strongLeg = strongLeg
        this.position = position
        this.celebrationSentence = celebrationSentence
    }
    goalClebration() {
        console.log("Goal Goal Goal Goal Goal !!!!⚽️⚽️⚽️")
        console.log(this.celebrationSentence)
        this.salary = this.salary * 102.5 / 100
        console.log(`Your salary has increased by 2.5%. Now your salary is: ${this.salary}$`);
    }
    set changeCelebrationSentence(val){
        this.celebrationSentence = val
        console.log(`goal clebration: ${this.celebrationSentence}`);
    }

}


class GoalKeeper extends Person {
    constructor(firstName, sureName, salary, age, id, isLeftHanded, lastGoalConceded){
        super(firstName, sureName, salary, age, id);
        this.isLeftHanded = isLeftHanded;
        this.lastGoalConceded = undefined
    }
    concededAGoal(){
        console.log("oh no!😱😱😱")
        this.lastGoalConceded = new Date().toLocaleString();
        this.salary = this.salary * 97.5 / 100
        console.log(`Your salary dropped by 2.5%. Now your salary is: ${this.salary}$`);
    }

    get getLastGoal(){
        return this.lastGoalConceded
    }
}

let newPlayer = new Player("Amit","Fikler",1020,22,50,"left","S","🤸")
let newGoalKeeper = new GoalKeeper("Dani", "Red", 1000, 40,102,true,undefined)
