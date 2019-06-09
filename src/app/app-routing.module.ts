import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { StudentDetailComponent }  from './student-detail/student-detail.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: StudentDetailComponent},
  {path: '',redirectTo: '/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
