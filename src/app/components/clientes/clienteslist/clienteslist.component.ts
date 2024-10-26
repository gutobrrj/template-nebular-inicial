import { Component, inject } from '@angular/core';
import { Cliente } from '@src/app/models/cliente';
import { ClientesService } from '@src/app/services/clientes.service';
import { ToastrService } from 'ngx-toastr';
import { NbButtonModule, NbCardModule, NbInputModule, NbTabsetModule } from '@nebular/theme';

@Component({
  selector: 'app-clienteslist',
  standalone: true,
  imports: [NbCardModule, NbTabsetModule, NbButtonModule, NbInputModule],
  templateUrl: './clienteslist.component.html',
  styleUrl: './clienteslist.component.scss'
})
export class ClienteslistComponent {

  toastr = inject(ToastrService);
  clienteService = inject(ClientesService);
  listaClientes: Cliente[] = [];

  

constructor() {
  this.exibirTodosClientes()
}

exibirTodosClientes() {
  this.clienteService.listarTodos().subscribe({
    next: (retorno) => {
      this.listaClientes = retorno;
      console.log(this.listaClientes);
    },
    error: (err) => {
      const errorMessage = err.error?.message || 'Erro inesperado! Tente novamente mais tarde.';
      this.toastr.error(errorMessage);	
      //alert("Ops! Ocorreu um erro. " + err);
    }
  });
}

}
