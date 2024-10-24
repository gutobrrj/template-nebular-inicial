import { HttpClient } from '@angular/common/http'; // Importa o HttpClient para fazer requisições HTTP
import { Injectable } from '@angular/core'; // Importa o decorador Injectable para permitir que esta classe seja injetada em outros componentes ou serviços
import { LoginResponse } from '../models/login-response.type'; // Importa a interface ou tipo LoginResponse que define a estrutura da resposta do login
import { catchError, tap, throwError } from 'rxjs'; // Importa operadores do RxJS para manipular streams de dados

@Injectable({
  providedIn: 'root' // Registra o serviço para ser injetável em toda a aplicação
})
export class LoginService {
  
  apiUrl: string = "http://localhost:8080/auth/login";  // URL da API onde as requisições de login serão enviadas

 
  constructor(private httpClient: HttpClient) { }  // Construtor que injeta o HttpClient para fazer chamadas HTTP

  // Método que realiza a autenticação do usuário
  efetuarLogin(username: string, password: string) {

    // Envia uma requisição POST para a API de login com os dados do usuário
    return this.httpClient.post<LoginResponse>(this.apiUrl, { username, password }).pipe(
      
      catchError((error) => { // Captura erros que possam ocorrer durante a requisição
        return throwError(() => error); // Relança o erro para que possa ser tratado em outro lugar
      }),

      // O operador tap permite realizar efeitos colaterais com o resultado, como salvar dados no sessionStorage
      tap((valor) => {
        // Armazena o token de autenticação e o nome de usuário no sessionStorage
        sessionStorage.setItem("auth-token", valor.accessToken); // Armazena o token de autenticação
        sessionStorage.setItem("username", valor.username); // Armazena o nome de usuário
      })
    )
  }
}
