import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {TestComponent} from './test/test.component';
import { LoginComponent } from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {GroupComponent} from './pages/group/group.component';
import {HomeComponent} from './pages/home/home.component';
import {NewfileComponent} from './pages/newfile/newfile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';



const routes: Routes = [
  
  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "portal", component: AdminComponent },
  { path: "new-group", component: GroupComponent },
  { path: "new-file", component: NewfileComponent },
  
  { path: "profile", component: ProfileComponent },
  { path: "search-user", component: UserSearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
