import { Routes } from '@angular/router'; // Importa o tipo Routes do Angular Router, que define as rotas da aplicação

// Importa os componentes que serão utilizados nas rotas
import { LayoutComponent } from './components/layout/layout.component'; // Componente de layout principal
import { NotFoundComponent } from './components/layout/not-found/not-found.component'; // Componente para exibir uma página de erro 404
import { AuthGuard } from './services/guards/auth-guard.service';

export const routes: Routes = [	// Define as rotas da aplicação usando o tipo Routes
  {
    path: 'auth', // Define a rota base para autenticação
    loadChildren: () => // Carrega as rotas de autenticação de forma assíncrona (lazy loading)
      import('./components/layout/routes/auth/auth.routes').then(
        (m) => m.AUTH_ROUTES ), // Importa o módulo de rotas de autenticação
  },
  {
    path: 'app', // Define a rota base para a aplicação principal
    component: LayoutComponent, // Define o componente que será exibido quando esta rota for acessada
    children: [ // Define as rotas filhas que estão aninhadas sob a rota 'app'
      {
        path: 'dashboard', // Define a rota para o dashboard
		    canActivate: [AuthGuard], // Aplica o AuthGuard(/service/guards/auth-guard.service) para proteger essa rota
        loadChildren: () => // Carrega as rotas do dashboard de forma assíncrona (lazy loading)
          import('./components/layout/menu/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES ),  // Importa o módulo de rotas do dashboard
      },
      {
        path: 'caminhoTeste', // Define uma rota de exemplo (caminhoTeste)
        canActivate: [AuthGuard], // Aplica o AuthGuard(/service/guards/auth-guard.service) para proteger essa rota
        loadChildren: () => // Carrega as rotas para esta seção de forma assíncrona (lazy loading)
          import('./components/layout/menu/submenu/submenu.routes').then(
            (m) => m.SUBMENU01_ROUTES ),  // Importa o módulo de rotas do submenu
      },
      { path: '', pathMatch: 'full', redirectTo: 'auth' }, // Redireciona para 'auth' se a rota 'app' for acessada sem um caminho específico
      { path: '**', component: NotFoundComponent }, // Captura todas as rotas não definidas e redireciona para o componente NotFoundComponent (página 404)
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'auth' }, // Redireciona a raiz da aplicação para 'auth'
  { path: '**', redirectTo: 'pages' }, // Captura todas as rotas não definidas na raiz da aplicação e redireciona para 'pages'
];
