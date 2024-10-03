import { Component } from '@angular/core';
import { Courses } from './courses';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {

  
  course = "";


  courses: Courses[] = [];


  addCourse() { 
    
    const newCourse : Courses = {

      course1 : this.course

    };

    
      this.courses.push(newCourse);

  }

}
