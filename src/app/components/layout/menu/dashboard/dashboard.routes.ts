import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PaginaVaziaComponent } from '@src/app/components/paginavazia/paginavazia.component';
import { AuthGuard } from '@src/app/services/guards/auth-guard.service';

export const DASHBOARD_ROUTES: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: '',
				component: PaginaVaziaComponent
			}
		]
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ''
	}
];
