import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.routes')
        .then(c => c.PlayerRoutes),
        canMatch:[AuthenticatedGuard]
    },
    {
        path: 'login-child',
        loadChildren: () => import('./pages/login/login.routes')
        .then(c => c.LoginRoutes)
    }
];
