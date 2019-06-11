import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError , map , tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  private studentUrl = 'api/students';
  constructor(
    private http: HttpClient
    
  ) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl)
    
  }
  
  getStudent(id: number): Observable<Student>{
    return of(STUDENTS.find(student => student.id === id));
    
  }

  updateStudent (student: Student): Observable<any>
  {
    return this.http.put(this.studentUrl , student , httpOptions).pipe
    (tap(_ => this.log(`updated student id=${student.id}`)),
    catchError(this.handleError<any>('updatedStudent'))
    );
  }
  
  /** POST: add a new hero to the server */
addStudent (student: Student): Observable<Student> {
  return this.http.post<Student>(this.studentUrl, student, httpOptions).pipe(
    tap((newStudent: Student) => this.log(`added student w/ id=${newStudent.id}`)),
    catchError(this.handleError<Student>('addStudent'))
  );
}
}
