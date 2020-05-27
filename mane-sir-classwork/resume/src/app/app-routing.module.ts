import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { ProjectAssignmentsComponent } from './project-assignments/project-assignments.component';
/////////////////////////////////////////////


const routes: Routes = [

   {
      path: 'education-details',
      component: EducationDetailsComponent
   },

   {
      path: 'Internship-details',
      component: InternshipDetailsComponent
   },

   {
      path: 'Technical-details',
      component: TechnicalDetailsComponent
   },

   {
      path: 'Project-assignments',
      component: ProjectAssignmentsComponent
   }
   ,
   
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
