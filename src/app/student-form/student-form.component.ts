import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student : Student = {} as Student;
  
    constructor(
      private studentService : StudentService,
    ) { }

  ngOnInit() {
    this.student.StudentName = "hardik";
    this.student.Email = "hatdik@gmail.com";
  }
 

  saveStudent(student): void{
    this.studentService.saveStudent(this.student)
    .subscribe(success => alert("Done"),
    error => alert(error));
    console.log(student);
  } 
}
