import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { EditComponent } from './pages/edit/edit.component';
import { FilterIdComponent } from './pages/filter-id/filter-id.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActionComponent } from './pages/action/action.component';





const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'newuser',
    component: UserComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'filter-id',
    component:FilterIdComponent
  },
  {
    path: 'action',
    component:ActionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
