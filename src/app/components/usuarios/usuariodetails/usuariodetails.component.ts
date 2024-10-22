import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
} from '@nebular/theme';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NbCardModule, NbTabsetModule, NbButtonModule, NbInputModule, HttpClientModule],
  templateUrl: './usuariodetails.component.html',
  styleUrl: './usuariodetails.component.scss',
})
export class UsuarioDetailsComponent {


}
