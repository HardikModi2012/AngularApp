import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Student[]
  {
    return STUDENTS;
  }
}
