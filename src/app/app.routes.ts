import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/loginComponents/login/login.component';
import { IndexComponent } from './features/main/layout/index/index.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'index', component:IndexComponent }
];
