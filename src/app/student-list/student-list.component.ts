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
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }
    getStudents(): void{
   this.studentService.getStudents().subscribe(studentsData => this.students = studentsData );//callbackfunction
    // studentsData will going to receive data,we use this data to populate to students parameter
  }
  }

