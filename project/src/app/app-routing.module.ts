import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent
 },
 { path: 'teacher-new',
 component: NewTeacherComponent},
 { path: 'list-teacher',
 component: ListTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
