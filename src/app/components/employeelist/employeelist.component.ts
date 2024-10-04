import { Component } from '@angular/core';
import { Employees } from './employees';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {

  name = "";
  department = "";
  img = ""
  
  
  employees: Employees[] = []


  addEmployees(){

    const newEmployee: Employees = {

      employeeName: this.name,
      employeeDept: this.department,
      employeeImg: this.img

    };

    this.employees.push(newEmployee);

  }

}
