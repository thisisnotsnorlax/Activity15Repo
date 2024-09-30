import { Component } from '@angular/core';
import { Students } from './students';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {


  studID = 0; 
  studName = "";
  studSec = "";


  student: Students[] = []


  addStudents() {

    const newStudent: Students = {
      studNum: this.studID,
      name: this.studName,
      section: this.studSec
    };

    this.student.push(newStudent);

    this.studID = 0;
    this.studName = "";
    this.studSec = "";
  }

}



