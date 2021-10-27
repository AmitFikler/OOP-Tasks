const express = require("express")
const Person = require("./parson")
const router = express.Router()


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

module.exports = GoalKeeper