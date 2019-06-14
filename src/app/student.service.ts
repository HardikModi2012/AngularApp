import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Injectable } from '@angular/core';
import { Observable, of, observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError , map , tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private studentUrl = "http://localhost:53338/api/student/getAll";
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
  log(arg0: string) {
    throw new Error("Method not implemented.");
  }

     getStudent(id : number): Observable<Student> {
       return this.http.get<Student>(`{http://localhost:53338/api/student/getStudent}/${id}`)
      .pipe(map(response =>{
          console.log(response);
            return response; }),
        catchError(this.handleError<Student>(`this.getStudent id =${id}`) )
      );
     }
    
    // updateStudent(student: Student): Observable<Student[]>
    // {
    //   return this.http.put<Student[]>(this.studentUrl, student , httpOptions ).pipe
    //   (map(response => {return response; }),
    //   catchError(this.handleError<Student[]>('updateStudent'))
    //   );
    // }

    deleteStudent( student: Student | number): Observable<Student[]>
    {
      const Student_Id = typeof student === 'number' ? student : student.Student_Id;
      return this.http.delete<Student[]>("http://localhost:53338/api/student/DeleteStudent",{}).pipe
      (map(response => {return response; }),
      catchError(this.handleError<Student[]>('deleteStudent'))
      );
    }
    
}

