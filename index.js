const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
class Employee {
    #salary;
    #isHired;
    static employee = [];
    constructor(name, salary, position, isHired) {
        this.name = name;
        this.#salary = salary;
        this.position = position;
        this.#isHired = true;
    }
    getSalary() {
        return this.#salary;
    }
    getSalary(amount) {
        this.#salary = amount;
    }
    setSalary() {
        return this.#salary;
    }
    getStatus() {
        return this.#isHired;
    }
    setStatus(command) {
        if (command === "fired") {
            this.#isHired = false;
        } else if (command === "hired") {
            this.#isHired = true;
        }
    }
}





module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}