import { Component } from '@angular/core';
import { SubjectList } from './subject';


@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {

  subject = "";

  subjects: SubjectList[] = []
  

  addSubject(){
    
    const newSubject = {

      subjectName: this.subject 
    }
    
    this.subjects.push(newSubject);
    this.subject = "";
  } 

}
