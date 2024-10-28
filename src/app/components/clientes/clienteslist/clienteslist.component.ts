import { ConfirmationService, MessageService } from 'primeng/api';

import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastrService } from 'ngx-toastr';
import { ClientesService } from '@src/app/services/clientes.service';
import { Component, inject } from '@angular/core';
import { Cliente } from '@src/app/models/cliente';

@Component({
  selector: 'app-clienteslist',
  standalone: true,
  imports: [TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule],
  providers: [MessageService],
  templateUrl: './clienteslist.component.html',
  styleUrl: './clienteslist.component.scss'
})
export class ClienteslistComponent {

  toastr = inject(ToastrService);
  clienteService = inject(ClientesService);
  listaClientes: Cliente[] = [];
  cliente!: Cliente;
  expandedRows = {};

constructor(private messageService: MessageService) {
  this.exibirTodosClientes()
}

exibirTodosClientes() {
  this.clienteService.listarTodos().subscribe({
    next: (retorno) => {
      this.listaClientes = retorno;
    },
    error: (err) => {
      const errorMessage = err.error?.message || 'Erro inesperado! Tente novamente mais tarde.';
      this.toastr.error(errorMessage);	
    }
  });
}

onRowExpand(event: TableRowExpandEvent) {
  this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
}

onRowCollapse(event: TableRowCollapseEvent) {
  this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
}

}
