import { UniversityComponent } from './university/university.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [{
  path :'student',
  component: StudentsComponent
},
{
  path: 'university',
  component: UniversityComponent
},
{
  path : 'courses',
  component: CoursesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
