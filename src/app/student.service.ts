import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';
import { Observable, of, observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError , map , tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private studentUrl = "http://localhost:53338/api/student/getAll"
    constructor(private http: HttpClient) {}
    
    getStudents(): Observable<Student[]>{
      return this.http.get<Student[]>(this.studentUrl).pipe(
        map(response => { 
          console.log(response);
          return response; }),
        catchError(this.handleError<Student[]>('getHeroes', []))
      );
      // we r expecting array of product we r using <Student[]>
     }

     private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

     getStudent(id: number): Observable<Student> {
      // TODO: send the message _after_ fetching the student
      return of(STUDENTS.find(student => student.Student_Id === id));
     }
    // private handleError(err: HttpErrorResponse) {
    //   console.log(err.message);
    //   return observable.throw(err.message);
      
    // }  
    updateStudent(): Observable<Student[]>
    {
      return this.http.put<Student[]>(this.studentUrl,{});
    }
    
}
