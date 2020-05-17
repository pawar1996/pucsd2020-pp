import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';
import { TechnicalDetailsComponent } from './technical-details/technical-details.component';
import { ProjectAssignmentsComponent } from './project-assignments/project-assignments.component';
/////////////////////////////////////////////////////////////



 

@NgModule({
  declarations: [
    AppComponent,
    EducationDetailsComponent,
    InternshipDetailsComponent,
    TechnicalDetailsComponent,
    ProjectAssignmentsComponent,
    /////////////////////
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ////////////////////
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
