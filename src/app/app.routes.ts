import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-child',
        loadChildren: () => import('./pages/login/login.routes')
        .then(c => c.LoginRoutes)
    }
];
