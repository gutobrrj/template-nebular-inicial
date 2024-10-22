import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from '@src/app/components/layout/login/login.component';

export const AUTH_ROUTES: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: '', pathMatch: 'full', redirectTo: 'login' },
			{ path: '**', redirectTo: 'login' }
		]
	}
];
