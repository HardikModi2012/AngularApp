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

  @Input() student : Student;

  constructor(
    private route: ActivatedRoute,
    private studentService : StudentService,
    private location : Location
  ) { }

  ngOnInit() {
  }

}
