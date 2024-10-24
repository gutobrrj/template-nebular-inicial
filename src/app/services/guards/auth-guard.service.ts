import { Injectable } from '@angular/core'; // Importa o decorador Injectable, que permite que a classe seja injetada como um serviço
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; // Importa as interfaces e classes necessárias do Angular Router
import { Observable } from 'rxjs'; // Importa Observable do RxJS, que é usado para manipulação de streams de dados

@Injectable({
  providedIn: 'root' // Registra o AuthGuard para ser injetável em toda a aplicação
})
export class AuthGuard implements CanActivate { // Define a classe AuthGuard que implementa a interface CanActivate

  constructor(private router: Router) {} // Injeta o serviço Router para que você possa navegar entre as rotas

  // Método canActivate que determina se a rota pode ser ativada
  canActivate(
    next: ActivatedRouteSnapshot, // O snapshot da rota que está prestes a ser ativada
    state: RouterStateSnapshot // O estado da rota atual
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Obtém o token de autenticação armazenado no sessionStorage
    const authToken = sessionStorage.getItem('auth-token');

    // Verifica se o token existe
    if (authToken) {
      return true; // Permite o acesso à rota se o token estiver presente
    } else {
      // Redireciona para a página de login se o token não existir
      this.router.navigate(['/auth/login']);
      return false; // Bloqueia o acesso à rota
    }
  }
}