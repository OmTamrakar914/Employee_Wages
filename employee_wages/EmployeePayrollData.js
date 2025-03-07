//UC13
// Ability to extend Employee Payroll Data to store gender and start date

class EmployeePayrollData{
    //propertiy
    id;
    salary;
    name;
    gender;
    startDate;

    //constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter method
    get name(){
        return this.name;
    }

    set name(name){
        this.name=name;
    }

    //method
    toString(){
        const options={ year: 'numeric', month: 'long', day: 'numeric'};
        const empDate= this.startDate===undefined?"undefined": this.startDate.toLocaleDateString("en-US",options);

        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}


let employeePayrollData1=new EmployeePayrollData(1,"Anush",50000);
console.log(employeePayrollData1.toString());
employeePayrollData1.name="Ojas";
console.log(employeePayrollData1.toString());

let employeePayrollData2=new EmployeePayrollData(2,"Om",50000,"M", new Date());
console.log(employeePayrollData2.toString());