import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.component')
        .then(c => c.LoginComponent)
    }
];
