import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { MatIconModule } from '@angular/material/icon';
//import { MatDialogModule } from '@angular/material/dialog';
//import {MaterialModule} from './material_module';

import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupComponent } from './pages/group/group.component';
import { HomeComponent } from './pages/home/home.component';
import { NewfileComponent } from './pages/newfile/newfile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    AdminComponent,
    GroupComponent,
    HomeComponent,
    NewfileComponent,
    ProfileComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    //MaterialModule,
    //MatDialogModule,
    HttpClientModule,
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
