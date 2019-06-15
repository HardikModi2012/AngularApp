import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    DashboardComponent,
    PageNotFoundComponentComponent,
    StudentFormComponent,
    StudentListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],

  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
