import { Injectable } from '@angular/core';
import { Student } from './student';
import {  InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const students = [
      { id : 11 , name: 'Dr rudra'},
      { id : 12 , name: 'Harsh'},
      { id : 13 , name: 'Virat'},
      { id : 14 , name: 'Mahi'},
      { id : 15 , name: 'Bumrah'},
      { id : 16 , name: 'Jadeja'},
      { id : 17 , name: 'Yuvi'},
      { id : 18 , name: 'Viru'},
    ];
    return {students};
  }

  genId(students: Student[]): number
  {
    return students.length >0? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
  constructor() { }
}
