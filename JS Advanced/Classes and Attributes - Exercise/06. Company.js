class Company {
    constructor() {
        this.department = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        } else if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.department[department]) {
            this.department[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.department[department].employees.push({ name, salary, position });
        this._updateDepartmentInfo(department, salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    _updateDepartmentInfo(department, salary) {
        let currDep = this.department[department];
        this.department[department].sumSalary += salary;
        currDep.avg = currDep.sumSalary/ currDep.employees.length;
    }

    _findBestDepartment() {
        return Object.entries(this.department).sort((a, b) => b[1].avg - a[1].avg)[0];
    }

    bestDepartment() {
        let bestDepart = this._findBestDepartment();
        let buff = `Best Department is: ${bestDepart[0]}\n`;
        buff += `Average salary: ${(bestDepart[1].avg).toFixed(2)}\n`;
        bestDepart[1].employees.sort((e1, e2) => {
            return e2.salary - e1.salary || e1.name.localeCompare(e2);
        }).forEach(element => buff += `${element.name} ${element.salary} ${element.position}\n`);
        return buff.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


//Best Department is: Construction
//Average salary: 1500.00
//Stan 2000 architect