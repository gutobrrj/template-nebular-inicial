import { Routes } from '@angular/router';

import { UsuarioListComponent } from '../../../usuarios/usuarioslist/usuarioslist.component';
import { SubmenuComponent } from './submenu.component';


export const SUBMENU01_ROUTES: Routes = [
	{
		path: 'usuario',
		component: SubmenuComponent,
		children: [
			{
				path: 'usuarioslist',
				component: UsuarioListComponent
			},
		]
	},
	
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ''
	}
];
