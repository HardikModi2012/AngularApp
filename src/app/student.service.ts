import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]>
  {
    return of(STUDENTS);
  }
}
