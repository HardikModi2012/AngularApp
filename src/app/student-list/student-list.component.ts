import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students : Student[];
  constructor() { }

  ngOnInit(){}
  // : void {
  //   this.students = this.students.
  //     .subscribe(students => this.students = students);
    
  // }

}
