import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { StudentDetailComponent }  from './student-detail/student-detail.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard',  pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:Student_Id', component: StudentDetailComponent },
  {path: 'students', component: StudentsComponent },
  {path: 'studentForm', component: StudentFormComponent },
  {path: 'studentList', component: StudentListComponent },
  {path: '**', component: PageNotFoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
