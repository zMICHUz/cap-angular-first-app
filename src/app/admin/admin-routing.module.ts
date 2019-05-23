import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './login/login.component';
import { AdminPanelComponent }   from './admin-panel/admin-panel.component';
import { AdminComponent }   from './admin/admin.component';
 
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'panel', component: AdminPanelComponent }
    ]
  }
];
 
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
