import { Routes } from '@angular/router';

import { UsuarioListComponent } from '../../../usuarios/usuarioslist/usuarioslist.component';
import { SubmenuComponent } from './submenu.component';
import { ClienteslistComponent } from '@src/app/components/clientes/clienteslist/clienteslist.component';


export const SUBMENU01_ROUTES: Routes = [
	{
		path: 'submenuRoutesModule',
		component: SubmenuComponent,
		children: [
			{
				path: 'usuarioslist',
				component: UsuarioListComponent
			},
			{
				path: 'clienteslist',
				component: ClienteslistComponent
			},
		]
	},
	
	{
		path: '',
		pathMatch: 'full',
		redirectTo: ''
	}
];
