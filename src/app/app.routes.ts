import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./components/layout/routes/auth/auth.routes').then((m) => m.AUTH_ROUTES)
	},
	{
		path: 'app',
		component: LayoutComponent,
		children: [	//usada para definir rotas filhas (ou aninhadas) dentro de uma rota principal
			{
				path: 'dashboard',
				loadChildren: () => import('./components/layout/menu/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES)
			},

			
			{	//Necessário para trazer as rotas dentro do submenu
				//Acrescenta ao patch acima(localhost:4200/app/) + estePath e juntará com o path trazido em SUBMENU01_ROUTES
				//O caminho completo deve coincidir com o caminho especificado na propriedade link: no arquivo menu.service.ts
				path: 'caminhoTeste', 
				loadChildren: () => import('./components/layout/menu/submenu/submenu.routes').then((m) => m.SUBMENU01_ROUTES)
			},
			
			{ path: '', pathMatch: 'full', redirectTo: 'auth' },
			{ path: '**', component: NotFoundComponent } 
		]
	},
	{ path: '', pathMatch: 'full', redirectTo: 'auth' }, //Define a rota do cliente quando for vazio '', neste caso redireciona para http://localhost:4200/pages
	{ path: '**', redirectTo: 'pages' }	//path: '**': Captura qualquer rota que não tenha um mapeamento específico.
];
