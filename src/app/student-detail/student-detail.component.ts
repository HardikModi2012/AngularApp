import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})


export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  
  constructor(
    private route: ActivatedRoute,
    // holds information about the route to this instance of component
    private studentService : StudentService,
    // gets student data from the remote server and this component will use it to get the student2display.
    private location : Location//for interacting with browser
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
    .subscribe(student => this.student = student);//callback function
  }

  goBack(): void
  {
    this.location.back();
  }

//static image of the route information shortly after the component was created
  // save(): void{
  //   this.studentService.updateStudent(this.student)
  //   .subscribe(() => this.goBack());
  // } 

  
  
}
