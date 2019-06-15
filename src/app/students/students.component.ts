import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students : Student[];
  // students is going to keep records of the student obj
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }
  
  
  delete(student: Student): void
  {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student).subscribe();
  }
}
