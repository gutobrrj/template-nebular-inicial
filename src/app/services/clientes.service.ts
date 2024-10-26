import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httpClient = inject(HttpClient) // Injeta o HttpClient para fazer chamadas HTTP
  apiUrl: string = "http://localhost:8080/cliente";  // URL da API onde as requisições de login serão enviadas

  constructor() { }

  listarTodos(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.apiUrl);
  }

}
