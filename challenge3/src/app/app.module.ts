import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { EditComponent } from './pages/edit/edit.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { FilterIdComponent } from './pages/filter-id/filter-id.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActionComponent } from './pages/action/action.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    EditComponent,
    FilterIdComponent,
    DashboardComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
