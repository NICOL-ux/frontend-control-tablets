import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/loginComponents/login/login.component';
import { IndexComponent } from './features/main/layout/index/index.component';
import { DashboardComponent } from './features/main/pages/dashboard/dashboard.component';
import { AlumnosComponent } from './features/main/pages/alumnos/alumnos.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'index', 
    component: IndexComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'alumnos', component: AlumnosComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];