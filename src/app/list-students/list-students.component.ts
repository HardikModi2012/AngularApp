import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  saveStudent(studentForm: NgForm): void
  {
    console.log(studentForm);
  }
}
