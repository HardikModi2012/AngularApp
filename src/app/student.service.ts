import { Student } from './student';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
       return this.http.get<Student>(`http://localhost:53338/api/student/getStudent/${id}`)
      .pipe(map(response =>{
           console.log(response);
              return response; }),
       // {}=curly brachet is for paramater which  is going to fetch from api

        catchError(this.handleError<Student>("this.getStudent Student_Id =${id}") )
        );
       }

      // 
      saveStudent(student: Student)
    {
      const id = student.Student_Id;

      return this.http.post<Student[]>((`http://localhost:53338/api/student`), student , httpOptions ).pipe
      (map(response => {return response; }),
      catchError(this.handleError<Student[]>('saveStudent'))
      );
    }
   
    updateStudent(  student: Student): Observable<Student[]>
    {
      const id =  student.Student_Id;

      return this.http.put<Student[]>((`http://localhost:53338/api/student/UpdateStudent/${id}`), student , httpOptions ).pipe
      (map(response => {return response; }),
      catchError(this.handleError<Student[]>('updateStudent'))
      );
    }

    deleteStudent( student: Student ): Observable<Student> {
      const id =  student.Student_Id;
      return this.http.delete<Student>((`http://localhost:53338/api/student/DeleteStudent/${id}`),httpOptions).pipe(
      catchError(this.handleError<Student>('deleteStudent'))
      );
    }
    
    
  
}

