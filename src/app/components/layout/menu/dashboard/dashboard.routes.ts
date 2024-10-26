import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PaginaVaziaComponent } from '@src/app/components/paginavazia/paginavazia.component';

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
